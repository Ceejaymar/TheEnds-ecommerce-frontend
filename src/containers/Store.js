import React, { Component } from 'react';
import axios from 'axios';

import url from '../config/url';
import ProductCard from '../components/ProductCard';

class Store extends Component {
  state = {
    name: '',
    header: '',
    products: [],
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`${url}/store/${id}`)
      .then((response) => {
        const { name, images: { header } } = response.data;

        this.setState({ name, header });
      });

    axios.get(`${url}/store/${id}/products/`)
      .then((response) => {
        const updatedProducts = [...this.state.products];

        response.data.map((product) => (
          updatedProducts.push(product)
        ));

        // eslint-disable-next-line no-unused-vars
        this.setState((prevState) => ({ products: updatedProducts }));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { name, header, products } = this.state;
    console.log(products);
    if (products.length > 1) {
      return (
        <>
          <h2>{name}</h2>
          <img style={{ width: '1000px' }} src={header} alt="store header" />
          {
            products.map((product) => (
              <ProductCard productInfo={product} key={product.id} />
            ))
          }
        </>
      );
    }
    return (
      <>
        <h2>{name}</h2>
        <img style={{ width: '1000px' }} src={header} alt="store header" />
        <div>No products in this store!</div>
      </>
    );
  }
}

export default Store;
