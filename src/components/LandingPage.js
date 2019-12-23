import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import homeData from '../homeData';

const LandingPage = () => (
  <div className="Home Page">
    <Helmet>
      <title>The Ends</title>
    </Helmet>
    <div className="Home__hero">
      <h1 className="Home__heading">The Ends</h1>
      <h2 className="Home__sub-heading">Threads that make you feel where you belong</h2>
    </div>
    <div className="Home__featured-stores">
      <h2 className="Home__featured-title">Featured Stores</h2>
      <div className="Home__stores-container">
        {
          homeData.featured.map((store) => (
            <Link to={`/store/${store.id}`} className="Home__store" key={store.id}>
              <img src={store.img} alt="" className="Home__store-img" />
              <div className="Home__store-content">
                <h3 className="Home__store-title">{store.name}</h3>
                <p className="Home__store-desc">{store.description}</p>
                <button
                  type="submit"
                  className="Home__store-button"
                >
                  Shop
                  {' '}
                  {store.name}
                </button>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  </div>
);

export default LandingPage;
