import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (fruit) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === fruit.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === fruit.id ? { ...item, quantity: item.quantity + fruit.quantity } : item
        );
      } else {
        return [...prevCart, fruit];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};