import React from 'react';

const About = () => (
  <div className="About">
    <figure className="About__side">
      <img className="About__img" src="https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="stylish man on sand" />
    </figure>
    <div>
      <h3>Lorem ipsum, dolor sit amet</h3>
      <h2>Lorem ipsum dolor, sit amet consectetur adipisicing </h2>
      {/* eslint-disable-next-line max-len */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a, autem nulla rem magni ab. Ratione modi nemo minus unde, amet, deserunt illo debitis quae sit iste, dolorem nesciunt optio!</p>
      <button type="button">To Marketplace</button>
    </div>
  </div>
);

export default About;
