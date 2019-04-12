import React, { Component } from 'react';
import axios from 'axios';

import ProductCard from '../components/ProductCard';

class Store extends Component {
  state = {
    name: '',
    header: '',
    products : []
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`http://localhost:3000/store/${id}`)
      .then(response => {
        const { name, images: { header } } = response.data
        
        this.setState({ name, header })
      })
    
    axios.get(`http://localhost:3000/store/${id}/products/`) 
      .then(response => {
        const updatedProducts = [...this.state.products];

        response.data.map(product => {
          return updatedProducts.push(product);
        })
      
        this.setState({ products: updatedProducts });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { name, header, products } = this.state;

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
}

export default Store;