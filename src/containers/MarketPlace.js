import React, { PureComponent } from 'react';
import axios from 'axios';

import url from '../config/url';
import StoreCard from '../components/StoreCard';

class MarketPlace extends PureComponent {
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
          )
        }
      </div>
    )
  }
}

export default MarketPlace;
