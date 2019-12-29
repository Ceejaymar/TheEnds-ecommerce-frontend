import React, { useContext } from 'react';
import CardCheckout from '../components/CardCheckout';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/cart';

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      This is the shopping cart.
      {cart.map((product) => (
        <CartItem key={item.id} product={product} />
      ))}
      <CardCheckout />
    </div>
  );
};

export default ShoppingCart;
