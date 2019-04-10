import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth';

const Navbar = () => {
  return (
    <AuthContext.Consumer>
      {
        state => {
          if (state.user) {
            return (
              <>
                <div>The Ends</div>
                <Link to='/'>Home</Link>
                <br />
                <Link to='/stores'>Marketplace</Link>
                <br />
                <Link to='/'>Account</Link>
                <br />
                <Link to='/logout'>Log out</Link>
                <hr />
              </>
            )
          }
          else {
            return (
              <>
                <div>The Ends</div>
                <Link to='/'>Home</Link>
                <br/>
                <Link to='/stores'>Marketplace</Link>
                <br/>
                <Link to="/signup">Sign Up</Link>
                <br />
                <Link to="/login">Log In</Link>
                <hr />
              </>
            )
          };
        }
      }
    </AuthContext.Consumer>
  );
}

export default Navbar;