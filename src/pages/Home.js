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
    <section className="Home__about">
      what great about the ends
    </section>
    <section className="Home__featured-stores">
      <h2 className="Home__featured-title">Featured Stores</h2>
      {
        homeData.featured.map((store) => (
          <Link to={`/store/${store.id}`} className={`Home__store Home__store--${store.id}`} key={store.id}>
            <img src={store.img} alt="" className="Home__store-img" />
          </Link>
        ))
      }
    </section>
    <section className="Home__featured-products">
      featured products
    </section>
    <section className="Home__gallery">
      gallery
    </section>
    <footer className="Home__footer">
      footer will go here
    </footer>
  </div>
);

export default LandingPage;
