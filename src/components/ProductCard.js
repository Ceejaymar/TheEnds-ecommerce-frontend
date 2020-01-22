import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ productInfo }) => {
  const { name, url, price, id } = productInfo;

  return (
    <Link to={`/product/${id}`} className="Product-card">
      <img className="Product-card__img" src={url} alt="product" />
      <h3 className="Product-card__name">{name}</h3>
      <p className="Product-card__price">{price}</p>
    </Link>
  );
};

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
