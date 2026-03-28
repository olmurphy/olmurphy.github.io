import "./App.scss";
import WorkInProgressModal from "./components/workInProgressModal/WorkInProgressModal";
import Main from "./containers/Main";
import Series from "./containers/series/Series";
import { ModalProvider, useModal } from "./contexts/ModalContext";
import { AnalyticsProvider, useAnalyticsContext } from "./contexts/AnalyticsContext";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { StyleProvider } from "./contexts/ThemeContext";

const AppContent = () => {
  const { isModalOpen, closeModal } = useModal();
  const { trackEvent } = useAnalyticsContext();
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  // Track modal interactions
  useEffect(() => {
    if (isModalOpen) {
      trackEvent("Modal", "Open", "WorkInProgress");
    }
  }, [isModalOpen, trackEvent]);

  return (
    <div className={isDark ? "dark-mode" : ""}>
      <StyleProvider value={{ isDark, changeTheme }}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/journey" element={<Series />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </Router>
      </StyleProvider>
      <WorkInProgressModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

function App() {
  return (
    <AnalyticsProvider measurementId="G-C21T1F3WZJ">
      {" "}
      {/* Replace with your GA4 Measurement ID */}
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </AnalyticsProvider>
  );
}

export default App;
