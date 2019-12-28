import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export {
  CartContext,
  CartProvider,
};
