import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import StoreCard from '../components/StoreCard';
import url from '../config/url';

const MarketPlace = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    async function fetchMarketplace() {
      try {
        const response = await axios.get(`${url}/store/`);

        setStores(response.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }

    fetchMarketplace();
  }, []);

  return (
    <div className="Marketplace Page">
      {/* <Helmet>
        <title>Marketplace</title>
      </Helmet> */}
      <div className="Marketplace__content">
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
    </div>
  );
};

export default MarketPlace;
