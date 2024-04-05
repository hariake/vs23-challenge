import React, { useState } from 'react';
import Modal from './UI/Modal';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]); // Assuming you have cart items stored in state

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Logo" />
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly={true} onClick={handleButtonClick}>
                    Cart ({cartItems.length})
                </Button>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </Modal>
            </nav>
        </header>
    );
};

export default Header;
