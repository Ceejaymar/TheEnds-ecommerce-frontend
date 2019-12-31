import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import PropTypes from 'prop-types';

import url from '../config/url';
import ProductCard from '../components/ProductCard';

const Store = ({ match }) => {
  const [storeName, setStoreName] = useState('');
  const [storeHeader, setStoreHeader] = useState('');
  const [products, setProducts] = useState('');
  const { params: { id } } = match;

  useEffect(() => {
    async function fetchStore() {
      try {
        const storeResponse = await axios.get(`${url}/store/${id}`);
        const { name, images: { header } } = storeResponse.data;
        setStoreName(name);
        setStoreHeader(header);

        const productResponse = await axios.get(`${url}/store/${id}/products/`);
        setProducts(productResponse.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }

    fetchStore();
  }, [id]);

  return (
    <div className="Page">
      <Helmet>
        <title>{storeName}</title>
      </Helmet>
      <h2>{storeName}</h2>
      <img style={{ width: '1000px' }} src={storeHeader} alt="store header" />
      {
        products.length > 1 ? (
          products.map((product) => (
            <ProductCard productInfo={product} key={product.id} />
          ))
        ) : <div>No products in this store!</div>
      }
    </div>
  );
};

Store.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Store;
