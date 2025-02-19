import React, { createContext, useState } from "react";

// Creazione del Context
export const CartContext = createContext();

// Provider del Carrello
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Funzione per aggiungere al carrello
  const addToCart = (image, name, price) => {
    setCartItems((prevCart) => [...prevCart, { image, name, price }]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevCart) => prevCart.filter((_, i) => i !== index)); // Rimuove un prodotto
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
