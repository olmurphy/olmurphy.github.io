import "./App.scss";
import WorkInProgressModal from "./components/workInProgressModal/WorkInProgressModal";
import Main from "./containers/Main";
import { ModalProvider, useModal } from "./contexts/ModalContext";
import { AnalyticsProvider } from "./contexts/AnalyticsContext";
import { useAnalyticsContext } from "./contexts/AnalyticsContext";
import { useEffect } from "react";

const AppContent = () => {
  const { isModalOpen, closeModal } = useModal();
  const { trackEvent } = useAnalyticsContext();
  
  // Track modal interactions
  useEffect(() => {
    if (isModalOpen) {
      trackEvent('Modal', 'Open', 'WorkInProgress');
    }
  }, [isModalOpen, trackEvent]);
  
  return (
    <div className="App">
      <Main />
      <WorkInProgressModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

function App() {
  return (
    <AnalyticsProvider measurementId="G-C21T1F3WZJ"> {/* Replace with your GA4 Measurement ID */}
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </AnalyticsProvider>
  );
}

export default App;
