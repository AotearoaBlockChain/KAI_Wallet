// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => (
  isOpen ? (
    <div className="modal">
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  ) : null
);

export default Modal;
