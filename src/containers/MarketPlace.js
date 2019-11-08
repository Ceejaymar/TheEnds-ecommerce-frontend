import React, { Component } from 'react';
import axios from 'axios';

import url from '../config/url';
import StoreCard from '../components/StoreCard';

class MarketPlace extends Component {
  state = {
    stores: []
  }

  componentDidMount() {
    axios.get(`${url}/store/`)
      .then(response => {
        const updatedState = { ...this.state };

        response.data.map(store => (
          updatedState.stores.push(store)
        ));

        this.setState(updatedState)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { stores } = this.state;

    if (stores.length > 0) {
      return stores.map((store, index) => (
        <StoreCard key={index} storeInfo={store} />
      ));
    }
    else {
      return (
        <div>
          Loading marketplace...
        </div>
      );
    }
  }
}

export default MarketPlace;
