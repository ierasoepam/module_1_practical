
import { Portal } from "react-portal";
import {FocusTrap} from "focus-trap-react";
import "./Dialog.css";

export const InternalDialog = ({ title, children, onClose }) => {
  return (
    <Portal>
      <FocusTrap>
        <div
          className="dialog-backdrop"
          onClick={onClose}
          role="presentation"
        >
          <div
            className="dialog-container"
            onClick={(e) => {}} 
          >
            <div className="dialog-header">
              <h2 className="dialog-title">{title}</h2>
              <button
                className="dialog-close-button"
                onClick={onClose}
                aria-label="Cerrar diálogo"
              >
                ×
              </button>
            </div>
            <div className="dialog-body">
              {children}
            </div>
          </div>
        </div>
      </FocusTrap>
    </Portal>
  );
};

