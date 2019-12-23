import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import url from '../config/url';
import StoreCard from '../components/StoreCard';

class MarketPlace extends Component {
  constructor() {
    super();

    this.state = {
      stores: [],
    };
  }

  async componentDidMount() {
    try {
      const updatedState = { ...this.state };
      const response = await axios.get(`${url}/store/`);

      await response.data.map((store) => updatedState.stores.push(store));
      this.setState(updatedState);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  render() {
    const { stores } = this.state;

    return (
      <div className="Marketplace Page">
        <Helmet>
          <title>Marketplace</title>
        </Helmet>
        {stores.length > 0 ? (
          stores.map((store) => (
            <StoreCard key={store.id} storeInfo={store} />
          ))
        ) : (
          <div>
            Loading marketplace...
          </div>
        )}
      </div>
    );
  }
}

export default MarketPlace;
