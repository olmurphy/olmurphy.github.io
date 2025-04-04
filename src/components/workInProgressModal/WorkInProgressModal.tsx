import React, { useEffect, useRef } from "react";
import "./WorkInProgressModal.scss";

interface WorkInProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkInProgressModal: React.FC<WorkInProgressModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
      
      if (modalRef.current) {
        modalRef.current.focus();
        
        // Get all focusable elements within the modal
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstFocusableElement = focusableElements[0] as HTMLElement;
        const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              // If shift + tab and on first element, move to last element
              if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus();
              }
            } else {
              // If tab and on last element, move to first element
              if (document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
              }
            }
          }
        };

        document.addEventListener('keydown', handleTabKey);
        return () => {
          document.removeEventListener('keydown', handleTabKey);
          document.body.style.overflow = 'auto'; // Restore scrolling when modal closes
        };
      }
    } else {
      document.body.style.overflow = 'auto'; // Restore scrolling when modal closes
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Enter") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div ref={modalRef} className="modal-content" onKeyDown={handleKeyDown} tabIndex={-1}>
        <div className="modal-header">
          <h2 id="modal-title">Work in Progress</h2>
          <button className="close-button" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>This website is currently under development. Some features may not be fully functional yet.</p>
          <p>Thank you for your patience!</p>
        </div>
        <div className="modal-footer">
          <button className="acknowledge-button" onClick={onClose} autoFocus>
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgressModal;
