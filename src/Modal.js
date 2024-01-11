// Modal.js
import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Thanks for your submission!</p>
      </div>
    </div>
  );
};

export default Modal;
