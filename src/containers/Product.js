import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import PropTypes from 'prop-types';
// import { AuthContext } from '../context/auth';
import url from '../config/url';

function Product({ match }) {
  // const { uid } = useContext(AuthContext);
  const [productInfo, setProductInfo] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const { params: { id } } = match;

    axios.get(`${url}/product/${id}`)
      .then((response) => {
        setProductInfo(response.data);
      });
  }, [match]);

  function handleAddToCart() {
    console.log('yerrr');
  }

  const { name, url: imageUrl, category, description, price } = productInfo;

  return (
    <div className="Product Page">
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <img style={{ width: '400px' }} src={imageUrl} alt="product" />
      <h3>{name}</h3>
      <h3>{category}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <div className="Product__quantity-cont">
        <button
          onClick={() => setQuantity((st) => st - 1)}
          type="button"
          className="Product__decrease"
          disabled={quantity === 1}
        >
          <i className="icon ion-md-remove" />
        </button>
        {quantity}
        {/* TODO: disable increase button when quanity is stock quantity */}
        <button
          onClick={() => setQuantity((st) => st + 1)}
          type="button"
          className="Product__increase"
        >
          <i className="icon ion-md-add" />
        </button>
      </div>
      <br />
      <button type="button" onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Product;
