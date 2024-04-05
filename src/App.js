// App.js
import React from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartProvider, useCart } from './store/CartContext'; // Import useCart hook

const App = () => {
    const { addToCart } = useCart();

    return (
        <CartProvider>
            <div className="App">
                <Header />
                <Meals addToCart={addToCart} />
                {/* Other components */}
            </div>
        </CartProvider>
    );
};

export default App;
