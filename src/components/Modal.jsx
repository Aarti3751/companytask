
import React from 'react';
import '../components/Tab.css'

const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>Close</button>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Modal;
