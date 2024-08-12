import React, { createContext, useState } from "react";

// Create a context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{ quantity, setQuantity, modalOpen, setModalOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};
