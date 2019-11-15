import React, { PureComponent } from 'react';
import axios from 'axios';

import url from '../config/url';
import StoreCard from '../components/StoreCard';

class MarketPlace extends PureComponent {
  state = {
    stores: [],
  }

  async componentDidMount() {
    try {
      const updatedState = { ...this.state };
      const response = await axios.get(`${url}/store/`);

      await response.data.map((store) => updatedState.stores.push(store));
      await this.setState(updatedState);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { stores } = this.state;

    return (
      <div className="Marketplace">
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
