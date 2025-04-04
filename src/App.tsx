import "./App.scss";
import WorkInProgressModal from "./components/workInProgressModal/WorkInProgressModal";
import Main from "./containers/Main";
import { ModalProvider, useModal } from "./contexts/ModalContext";

const AppContent = () => {
  const { isModalOpen, closeModal } = useModal();
  
  return (
    <div className="App">
      <Main />
      <WorkInProgressModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

export default App;
