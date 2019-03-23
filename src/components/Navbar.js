import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/signup">Sign Up</Link>
      <br/>
      <Link to="/login">Log In</Link>
      <br/>
      <Link to="/logout">Log out</Link>
    </div>
  );
}

export default Navbar;