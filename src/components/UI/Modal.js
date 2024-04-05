import React, { useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);

    const closeModal = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <dialog ref={modalRef} className="modal" open={isOpen} onClick={closeModal}>
            {children}
        </dialog>
    );
};

export default Modal;
