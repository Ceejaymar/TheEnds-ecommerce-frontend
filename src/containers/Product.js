import React, { Component } from 'react';
import axios from 'axios';
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
      url: '',
      size: '',
      quantity: 1,
      stock: {},
      uid: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { uid } = this.context;

    // eslint-disable-next-line no-console
    console.log('this is the uid', uid);

    axios.get(`${url}/product/${id}`)
      .then((response) => {
        const { name, price, description, category, url, stock } = response.data;

        this.setState({ name, price, description, category, url, stock, uid });
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
    const { name, price, description, quantity, url } = this.state;

    return (
      <div className="Product Page">
        <img style={{ width: '400px' }} src={url} alt="product" />
        <h3>{name}</h3>
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

export default Product;
