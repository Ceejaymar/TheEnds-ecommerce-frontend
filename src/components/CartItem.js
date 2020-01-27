import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ product }) => {
  const { name, price, quantity, size, url } = product;
  return (
    <div className="Cart-item">
      <img className="Cart-item__img" src={url} alt="product" />
      <h3>{name}</h3>
      <p>{size}</p>
      <p>{quantity}</p>
      <div className="Cart-item__price">
        <p>
          $
          {price.replace(/\$|,/g, '') * quantity}
        </p>
        <p className="Cart-item__sub-price">
          {price}
          {' '}
          ea
        </p>
      </div>
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
