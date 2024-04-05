import React, { createContext, useState } from 'react';

// Create a context for managing the cart state and actions
const CartContext = createContext({
  cart: [],
  addItem: (item) => {},
});

// Create a provider component to wrap the components needing access to the cart context
export const CartContextProvider = (props) => {
  // State to manage the cart items
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addItemHandler = (item) => {
    // Check if the item already exists in the cart
    const updatedCartItems =  [...cart]
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If item already exists, update its quantity

          // Increase the quantity of the existing item
          updatedCartItems[existingItemIndex] = { ...cart[existingItemIndex], quantity: cart[existingItemIndex].quantity + 1 };
        } else {
            updatedCartItems.push({ ...item, quantity: 1 })
        }
        // For other items, return them as they are
       // return cartItem;
 
      // Update the cart with the updated item quantity
      setCart(updatedCartItems);
  };



  // Create the context value with cart state and addItem function
  const cartContext = {
    cart: cart,
    addItem: addItemHandler,
  };

  // Provide the context value to its children components
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
