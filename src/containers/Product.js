import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {
  state = {
    name: '',
    price: '',
    description: '',
    category: '',
    url: '',
    size: '',
    quanitity: '',
    stock: {}
  }
  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`http://localhost:3000/product/${ id }`)
      .then(response => {
        // const newState = Object.assign({}, this.state);
        const { name, price, description, category, url, stock } = response.data;

        this.setState({ name, price, description, category, url, stock });
      })
  }
  
  render() {
    console.log(this.state); 
    const { name, price, description, category, url, stock } = this.state;

    return (
      <div>
        <h3>{ name }</h3>
        <img style={{ width: "400px" }} src={ url } alt="product" />
        <p>desc: { description }</p>
        <p>price: { price }</p>
        <label>quantity</label>
        <select name="quantity" id="">
          {
            [1,2,3,4,5,6,7,8,9,10].map((option, index) => {
              return <option key={index}>{ option }</option>
            })
          }
        </select>
        <br />
        <button>Add to cart</button>
      </div>
    );
  }
}

export default Product;