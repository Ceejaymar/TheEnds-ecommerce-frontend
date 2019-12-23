import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import PropTypes from 'prop-types';

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
        <div className="Page">
          <Helmet>
            <title>{name}</title>
          </Helmet>
          <h2>{name}</h2>
          <img style={{ width: '1000px' }} src={header} alt="store header" />
          {
            products.map((product) => (
              <ProductCard productInfo={product} key={product.id} />
            ))
          }
        </div>
      );
    }
    return (
      <div className="Page">
        <h2>{name}</h2>
        <img style={{ width: '1000px' }} src={header} alt="store header" />
        <div>No products in this store!</div>
      </div>
    );
  }
}

Store.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Store;
