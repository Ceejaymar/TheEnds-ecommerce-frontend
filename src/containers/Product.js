import React, { Component } from 'react';
import axios from 'axios';
import AuthContext from '../context/auth';
import url from '../config/url';

class Product extends Component {
  static contextType = AuthContext;

  state = {
    name: '',
    price: '',
    description: '',
    category: '',
    url: '',
    size: '',
    quanitity: '',
    stock: {},
    uid: ''
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { uid } = this.context;

    console.log('this is the uid', uid)

    axios.get(`${url}/product/${id}`)
      .then(response => {
        const { name, price, description, category, url, stock } = response.data;

        this.setState({ name, price, description, category, url, stock, uid });
      })
  }

  handleAddToCart = () => {
    console.log('yerrr');
  }

  render() {
    const { name, price, description, url } = this.state;

    return (
      <div>
        <h3>{name}</h3>
        <img style={{ width: "400px" }} src={url} alt="product" />
        <p>desc: {description}</p>
        <p>price: {price}</p>
        <label>quantity</label>
        <select name="quantity" id="">
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option, index) => {
              return <option key={index}>{option}</option>
            })
          }
        </select>
        <br />
        <button onClick={this.handleAddToCart}>Add to cart</button>
      </div>
    );
  }
}

export default Product;
