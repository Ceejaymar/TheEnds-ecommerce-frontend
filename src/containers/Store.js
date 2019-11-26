import React, { Component } from 'react';
import axios from 'axios';

import url from '../config/url';
import ProductCard from '../components/ProductCard';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      header: '',
      products: [],
    };
  }


  async componentDidMount() {
    const { id } = this.props.match.params;
    const updatedProducts = [...this.state.products];

    try {
      const response = await axios.get(`${url}/store/${id}`);
      const { name, images: { header } } = response.data;
      this.setState({ name, header });

      const response2 = await axios.get(`${url}/store/${id}/products/`);
      await response2.data.map((product) => (
        updatedProducts.push(product)
      ));
      // eslint-disable-next-line no-unused-vars
      this.setState((prevState) => ({ products: updatedProducts }));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  render() {
    const { name, header, products } = this.state;

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
