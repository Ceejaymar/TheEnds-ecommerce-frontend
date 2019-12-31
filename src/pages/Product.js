import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import axios from 'axios';
// import { AuthContext } from '../context/auth';
import { CartContext } from '../context/cart';
import url from '../config/url';

function Product({ match }) {
  // const { uid } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const [productInfo, setProductInfo] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { name, url: imageUrl, category, description, price } = productInfo;
  const { params: { id } } = match;

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get(`${url}/product/${id}`);
      setProductInfo(response.data);
    }

    fetchProduct();
  }, [id]);

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
      {
        Object.keys(productInfo).length ? (
          Object.keys(productInfo.stock).map((size) => (
            <label htmlFor="size" key={size}>
              {size}
              <input id="size" type="radio" />
            </label>
          ))
        ) : ''
      }
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
      <button type="button" onClick={() => addToCart(productInfo, quantity)}>Add to cart</button>
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
