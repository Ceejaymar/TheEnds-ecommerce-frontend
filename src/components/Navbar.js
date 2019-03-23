import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth';

const Navbar = () => {
  return (
    <AuthContext.Consumer>
      {
        user => {
          if (user) {
            return (
              <>
            {console.log(user)}
                <Link to='/'>Home</Link>
                <br/>
                <Link to='/logout'>Log out</Link>
              </>
            )
          }
          else {
            return (
              <>
                <Link to="/signup">Sign Up</Link>
                <br/>
                <Link to="/login">Log In</Link>
              </>
            )
          }
        }
      }
    </AuthContext.Consumer>
  );
}

export default Navbar;