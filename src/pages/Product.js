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
  const [size, setSize] = useState('');
  const [hide, setHide] = useState(false);
  const { name, url: imageUrl, description, price } = productInfo;
  const { params: { id } } = match;

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get(`${url}/product/${id}`);
      setProductInfo(response.data);

      if (response.data.stock.os) {
        setSize('os');
        setHide(true);
      }
    }

    fetchProduct();
  }, [id]);

  return (
    <div className="Product Page">
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div className="Product__content">
        <img className="Product__img" src={imageUrl} alt="product" />
        <div className="Product__info">
          <h2 className="Product__name">{name}</h2>
          <p className="Product__desc">{description}</p>
          <p className="Product__price">{price}</p>
          <div className="Product__sizes">
            {
              Object.keys(productInfo).length > 0 ? (
                Object.keys(productInfo.stock).map((sz) => (
                  <label htmlFor="size" key={sz} style={{ display: hide ? 'none' : 'inline' }}>
                    {sz}
                    <input
                      name="size"
                      id="size"
                      value={sz}
                      type="radio"
                      onClick={(e) => setSize(e.target.value)}
                      disabled={!Number(productInfo.stock[sz])}
                    />
                  </label>
                ))
              ) : ''
            }
          </div>
          {
            Object.keys(productInfo).length > 0 && productInfo.stock[size] < 5 && (
              <p>
                Only
                {' '}
                {productInfo.stock[size]}
                {' '}
                left!
              </p>
            )
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
          <button
            type="button"
            disabled={!size}
            onClick={() => addToCart(productInfo, quantity, size)}
            className="Product__add-cart"
          >
            Add to cart
          </button>
        </div>
      </div>
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
