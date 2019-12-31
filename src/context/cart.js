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

function countCart(cart) {
  return cart.reduce((previousVal, currentVal) => (previousVal + currentVal.quantity), 0);
}

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  async function addToCart(product, quantity) {
    const updatedCart = [...cart];
    const newProduct = { ...product, quantity };

    for (let i = 0; i <= updatedCart.length; i += 1) {
      if (updatedCart.length === 0) {
        updatedCart.push(newProduct);
        break;
      } else if (updatedCart[i].id === newProduct.id) {
        updatedCart[i].quantity += newProduct.quantity;
        break;
      }
      updatedCart.push(newProduct);
    }

    setCart(updatedCart);
    setCartQuantity(countCart(updatedCart));
    toast(<ToastComponent product={product} quantity={newProduct.quantity} />);
  }

  return (
    <CartContext.Provider value={{ cart, cartQuantity, addToCart }}>
      <ToastContainer autoClose={3000} transition={Zoom} hideProgressBar />
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
