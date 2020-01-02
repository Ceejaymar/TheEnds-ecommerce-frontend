import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ product }) => {
  const { name, price, quantity, size, url, storeId } = product;
  return (
    <div>
      cart item
      {name}
      <hr />
      {price}
      <hr />
      {size}
      <hr />
      {quantity}
      <hr />
      {url}
      <hr />
      {storeId}
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    size: PropTypes.string,
    url: PropTypes.string,
    storeId: PropTypes.number,
  }).isRequired,
};

export default CartItem;
