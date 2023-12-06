// TestModal.jsx

import React from 'react';

const TestModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" style={{zIndex: '1000', display: 'block'}}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>This is a simple modal!</p>
      </div>
    </div>
  );
};

export default TestModal;
