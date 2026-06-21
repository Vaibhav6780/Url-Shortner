import { useEffect } from "react";
import "./Toast.css";

export default function Toast({ message, onClose, actionLabel, onAction }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => onClose(), 2000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast-bar">
      {/* Left — icon */}
      <div className="toast-bar-icon" aria-hidden="true">!</div>

      {/* Middle — text */}
      <div className="toast-bar-text">
        <span className="toast-bar-title">Error</span>
        <span className="toast-bar-msg">{message}</span>
      </div>

      {/* Right — action button */}
      {actionLabel && (
        <button
          className="toast-bar-action"
          onClick={onAction || onClose}
          type="button"
        >
          {actionLabel}
        </button>
      )}

      {/* Close X */}
      <button className="toast-bar-close" onClick={onClose} type="button" aria-label="Dismiss">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* progress bar */}
      <div className="toast-bar-progress" />
    </div>
  );
}
