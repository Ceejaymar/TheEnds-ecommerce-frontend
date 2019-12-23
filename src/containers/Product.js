import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/auth';
import url from '../config/url';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: '',
      description: '',
      category: '',
      imageUrl: '',
      size: '',
      quantity: 1,
      stock: {},
      uid: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // const { uid } = this.context;

    // eslint-disable-next-line no-console
    // console.log('this is the uid', uid);

    axios.get(`${url}/product/${id}`)
      .then((response) => {
        const { name, price, description, category, url: imageUrl, stock } = response.data;

        this.setState({ name, price, description, category, imageUrl, stock });
      });
  }

  quantityHandler = (delta) => {
    const { quantity } = this.state;

    if (quantity === 1 && delta === -1) {
      return;
    }

    this.setState((st) => ({
      quantity: st.quantity + delta,
    }));
  }

  handleAddToCart = () => {
    console.log('yerrr');
  }

  render() {
    const { name, price, description, quantity, category, imageUrl } = this.state;

    return (
      <div className="Product Page">
        <Helmet>
          <title>{ name }</title>
        </Helmet>
        <img style={{ width: '400px' }} src={imageUrl} alt="product" />
        <h3>{name}</h3>
        <h3>{category}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <div className="Product__quantity-cont">
          <button
            onClick={() => this.quantityHandler(-1)}
            type="button"
            className="Product__decrease"
            disabled={quantity === 1}
          >
            <i className="icon ion-md-remove" />
          </button>
          { quantity }
          {/* TODO: disable increase button when quanity is stock quantity */}
          <button
            onClick={() => this.quantityHandler(1)}
            type="button"
            className="Product__increase"
          >
            <i className="icon ion-md-add" />
          </button>
        </div>
        <br />
        <button type="button" onClick={this.handleAddToCart}>Add to cart</button>
      </div>
    );
  }
}

Product.contextType = AuthContext;

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Product;
