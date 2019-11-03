import React, { useState, useEffect } from 'react';
import axios from 'axios';

import url from '../config/url';
import ProductCard from '../components/ProductCard';

const Store = (props) => {
  const [name, setName] = useState('');
  const [header, setHeader] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { id } = props.match.params;

    axios.get(`${url}/store/${id}`)
      .then(response => {
        const { name, images: { header } } = response.data;

        setName(name);
        setHeader(header);
      })

    axios.get(`${url}/store/${id}/products/`)
      .then(response => {
        const updatedProducts = [...products];

        response.data.map(product => (
          updatedProducts.push(product)
        ));

        setProducts(updatedProducts);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if(products.length > 1) {
    return (
      <>
        <h2>{ name }</h2>
        <img style={{ "width": "1000px" }} src={ header } alt="store header"/>
        {
          products.map((product, index) => (
            <ProductCard productInfo={product} key={index} />
          ))
        }
      </>
    )
  }
  else {
    return (
      <>
        <h2>{ name }</h2>
        <img style={{ "width": "1000px" }} src={ header } alt="store header"/>
        <div>No products in this store!</div>
      </>
    )
  }
}

export default Store;
