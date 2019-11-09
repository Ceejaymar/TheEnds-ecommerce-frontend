import React from 'react';

const LandingPage = () => {
  return (
    <div className="Home">
      <div className="Home__hero">
        <h1 className="Home__heading">The Ends</h1>
        <h2 className="Home__sub-heading">Threads that make you feel where you belong</h2>
      </div>
      <div className="Home__featured-stores">
        <div className="Home__stores-container">
          <div className="Home__store">
            <img src="https://images.unsplash.com/photo-1520445740767-c2fc76e6b5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="" className="Home__store-img"/>
            <div className="Home__store-content"></div>
          </div>
          <div className="Home__store">
            <img src="https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="" className="Home__store-img"/>
            <div className="Home__store-content"></div>
          </div>
          <div className="Home__store">
            <img src="https://images.unsplash.com/photo-1496449583099-4fd0730a699b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="" className="Home__store-img"/>
            <div className="Home__store-content"></div>
          </div>
          <div className="Home__store">
            <img src="https://images.unsplash.com/photo-1520810336800-28d1a1d41906?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80" alt="" className="Home__store-img"/>
            <div className="Home__store-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
