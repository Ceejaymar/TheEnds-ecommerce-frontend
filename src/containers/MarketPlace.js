import React, { useState, useEffect } from 'react';
import axios from 'axios';

import url from '../config/url';
import StoreCard from '../components/StoreCard';

const MarketPlace = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get(`${url}/store/`)
      .then(response => {
        const updatedStores = [ ...stores ];

        response.data.map(store => (
          updatedStores.push(store)
        ));

        setStores(updatedStores);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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

export default MarketPlace;
