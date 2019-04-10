import React, { Component } from 'react';
import axios from 'axios';

import StoreCard from '../components/StoreCard';

class Stores extends Component {
  state = {
    stores: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/store/all')
      .then(response => {
        const newState = { ...this.state };

        response.data.map(store => {
          return newState.stores.push(store);
        })

        this.setState(newState)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { stores } = this.state;

    if(stores.length > 0) {
      return this.state.stores.map((store, index) => (
        <StoreCard key={index} storeInfo={store} /> 
      ))
    }
    else {
      return (
        <div>
          yoo
        </div>
      )
    }
  }
}

export default Stores;