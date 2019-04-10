import React from 'react';

const ProductCard = ({ productInfo }) => {
  const { name, url, price } = productInfo;
  
  return (
    <div>
      <h3>{ name }</h3>
      <img style={{ "width": "200px" }} src={url} alt="product" />
      <p>{ price }</p>
    </div>
  );
};

export default ProductCard;