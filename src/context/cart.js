import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast, cssTransition } from 'react-toastify';

import ToastComponent from '../components/ToastComponent';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext(null);

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  duration: [400, 600],
  appendPosition: false,
});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  console.log('cart', cart);

  function addToCart(product, quantity) {
    const newProduct = { ...product, quantity };

    setCart([...cart, newProduct]);
    toast(<ToastComponent product={product} quantity={quantity} />);
  }

  function countItems() {
    // return cart.reduce((item) => )


  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <ToastContainer autoClose={5000} transition={Zoom} hideProgressBar />
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
