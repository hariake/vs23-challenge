import React, { useContext, useState } from 'react';
import Modal from './UI/Modal';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCartButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const cartContext = useContext(CartContext)

    console.log(cartContext)
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Logo" />
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly={true} onClick={handleCartButtonClick}>
                    Cart (0)
                </Button>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    {/* Content inside the modal */}
                    <p>This is the content of the modal.</p>
                </Modal>
            </nav>
        </header>
    );
};

export default Header;
