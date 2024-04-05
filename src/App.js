// App.js
import React from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartProvider } from './store/CartContext';

const App = () => {
    return (
        <CartProvider> {/* Wrap your components with the CartProvider */}
            <div className="App">
                <Header />
                <Meals />
                {/* Other components */}
            </div>
        </CartProvider>
    );
};

export default App;
