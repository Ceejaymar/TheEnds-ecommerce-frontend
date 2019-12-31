import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  height: '200px',
};

const ToastComponent = ({ product, quantity }) => {
  const { name, price, url } = product;
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
      <img src={url} alt={name} style={{ height: '100px' }} />
      {name}
      {price}
      <hr />
      {/* <p>subtotal: </p> */}
      <button type="button">Checkout</button>
    </div>
  );
};

ToastComponent.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ToastComponent;
