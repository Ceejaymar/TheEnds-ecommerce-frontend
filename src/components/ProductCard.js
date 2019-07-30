import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ productInfo }) => {
  const { name, url, price, id } = productInfo;

  return (
    <div>
      <Link to={`/product/${id}`}>
        <h3>{ name }</h3>
        <img style={{ "width": "200px" }} src={ url } alt="product" />
        <p>{ price }</p>
      </Link>
    </div>
  );
};

export default ProductCard;
