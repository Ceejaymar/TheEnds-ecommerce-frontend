import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className="Cart">
      <div className="Cart__items">
        <h2 className="Cart__heading">Shopping bag</h2>
        {cart.map((product) => (
          <CartItem key={uuid()} product={product} />
        ))}

        {
          !cart.length ? (
            <p className="Cart__empty">
              Your cart is empty.
              {' '}
              <Link to="/marketplace">
                Continue shopping
              </Link>
            </p>
          ) : ''
        }
      </div>
      <div className="Cart__info">
        <h3 className="Cart__summary">Order Summary</h3>
        <p>Subtotal:</p>
        <p className="Cart__price">
          $
          {total || '0.00'}
        </p>
        <p>Tax: </p>
        <p className="Cart__price">$0.00</p>
        <p>Discount:</p>
        <p className="Cart__price">$0.00</p>
        <p>Total:</p>
        <p className="Cart__price">
          $
          {total || '0.00'}
        </p>
        <CardCheckout />
      </div>
    </div>
  );
};

export default ShoppingCart;
