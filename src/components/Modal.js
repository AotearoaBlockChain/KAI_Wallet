// components/Modal.js
import React from 'react';
import './Modal.css'; // Optional: for custom styles

const Modal = ({ isOpen, onClose, children }) => (
  isOpen ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">Close</button>
        {children}
      </div>
    </div>
  ) : null
);

export default Modal;
