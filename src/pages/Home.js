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
    <section className="Home__offers">
      {
        homeData.offers.map((offer) => (
          <div key={offer.id} className="Home__offer-content">
            <div className={`Home__icon-circle Home__icon-circle--${offer.id}`}>
              <i className={`icon ion-md-${offer.icon} Home__icon`} />
            </div>
            <h3 className="Home__offer">{offer.offer}</h3>
            <p className="Home__offer-desc">{offer.description}</p>
          </div>
        ))
      }
    </section>
    <section className="Home__featured-stores">
      <h2 className="Home__featured-title">Featured Stores</h2>
      {
        homeData.stores.map((store) => (
          <Link to={`/store/${store.id}`} className={`Home__store Home__store--${store.id}`} key={store.id}>
            <img src={store.img} alt="" className="Home__store-img" />
            <button className="Home__shop" type="button">
              Shop
              {' '}
              <span className="Home__shop-text">{store.name}</span>
            </button>
          </Link>
        ))
      }
    </section>
    {/* <section className="Home__featured-products">
      <h2 className="Home__products-header">Featured Products</h2>
      {
        homeData.products.map((product) => (
          <Link key={product.id} className="Home__featured-info" to={`/product/${product.id}`}>
            <img className="Home__product-img" src={product.img} alt={product.name} />
            <div className="Home__view-product">
              <i className="icon ion-md-eye Home__product-icon" />
              View Product
            </div>
          </Link>
        ))
      }
    </section> */}
    {/*
    <section className="Home__gallery">
      gallery
    </section>
    <footer className="Home__footer">
      footer will go here
    </footer> */}
  </div>
);

export default LandingPage;
