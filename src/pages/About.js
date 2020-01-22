import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="About">
    <figure className="About__side">
      <img className="About__img" src="https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="stylish man on sand" />
    </figure>
    <div className="About__content">
      <h2 className="About__header">What is The Ends?</h2>
      <p className="About__description">
        {/* eslint-disable-next-line max-len */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a, autem nulla rem magni ab. Ratione modi nemo minus unde, amet, deserunt illo debitis quae sit iste, dolorem nesciunt optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a, autem nulla rem magni ab. Ratione modi nemo minus unde, amet, deserunt illo debitis quae sit iste, dolorem nesciunt optio!
      </p>
      <Link className="About__link" to="/marketplace">
        To marketplace
        <i className="icon ion-md-arrow-round-forward About__icon" />
      </Link>
    </div>
  </div>
);

export default About;
