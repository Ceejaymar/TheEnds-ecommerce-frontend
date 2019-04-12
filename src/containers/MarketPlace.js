import React, { Component } from 'react';
import axios from 'axios';

import StoreCard from '../components/StoreCard';

class MarketPlace extends Component {
  state = {
    stores: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/store/all')
      .then(response => {
        const updatedState = { ...this.state };
        // const updatedState = Object.assign({}, this.state);

        response.data.map(store => {
          return updatedState.stores.push(store);
        })

        this.setState(updatedState)
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
          Loading marketplace...
        </div>
      )
    }
  }
}

export default MarketPlace;