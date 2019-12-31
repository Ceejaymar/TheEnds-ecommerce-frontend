import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import StoreCard from '../components/StoreCard';
import url from '../config/url';

const MarketPlace = () => {
  const [stores, setStores] = useState([]);

  const fetchMarketplace = async () => {
    try {
      const updatedStores = [...stores];
      // eslint-disable-next-line no-inner-declarations
      const response = await axios.get(`${url}/store/`);
      response.data.map((store) => updatedStores.push(store));

      setStores(updatedStores);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMarketplace();
  }, []);

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
};

export default MarketPlace;
