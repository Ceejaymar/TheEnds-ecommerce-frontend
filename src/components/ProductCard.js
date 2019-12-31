import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ productInfo }) => {
  const { name, url, price, id } = productInfo;

  return (
    <div>
      <Link to={`/product/${id}`}>
        <h3>{name}</h3>
        <img style={{ width: '200px' }} src={url} alt="product" />
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
