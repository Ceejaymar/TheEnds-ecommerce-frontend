import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  height: '200px',

};

const ToastComponent = ({ product, quantity }) => {
  return (
    <div style={styles}>
      <h3>
        Added
        {' '}
        {quantity}
        {' '}
        item(s) to bag!
      </h3>
      <hr />
      <img src={product.url} alt={product.name} style={{ height: '100px'}} />
      {product.name}
      {product.price}
      {product.quantity}
      <hr />
      {/* <p>subtotal: </p> */}
      <button type="button">Checkout</button>
    </div>
  );
};


export default ToastComponent;
