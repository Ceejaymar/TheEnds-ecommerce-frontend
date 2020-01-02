import React, { useState, useContext, useEffect } from 'react';
import uuid from 'uuid/v4';
import CardCheckout from '../components/CardCheckout';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/cart';

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = cart.reduce((previousVal, currentVal) => (previousVal + (parseFloat(currentVal.price.replace(/\$|,/g, '')) * currentVal.quantity)), 0);
    setTotal(sum);
  }, [cart]);

  console.log('total', total);

  return (
    <div>
      This is the shopping cart.
      {cart.map((product) => (
        <CartItem key={uuid()} product={product} />
      ))}
      {total}
      <CardCheckout />
    </div>
  );
};

export default ShoppingCart;
