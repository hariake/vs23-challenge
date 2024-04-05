// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Create context
const CartContext = createContext();

// Initial state for the cart
const initialState = [];

// Reducer function to manage cart state
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                const updatedState = [...state];
                updatedState[existingItemIndex].quantity++;
                return updatedState;
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        default:
            return state;
    }
};

// Custom provider component
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook for consuming context
export const useCart = () => {
    return useContext(CartContext);
};
