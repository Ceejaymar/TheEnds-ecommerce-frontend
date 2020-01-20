import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ productInfo }) => {
  const { name, url, price, id } = productInfo;

  return (
    <div className="Product-card">
      <Link to={`/product/${id}`}>
        <img className="Product-card__img" src={url} alt="product" />
        <h3>{name}</h3>
        <p>{price}</p>
      </Link>
    </div>
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
