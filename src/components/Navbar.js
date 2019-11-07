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
              <div className="nav" >
                <div className="nav__brand">The Ends</div>
                <div className="nav__menu">
                  <div className="nav__links">
                    <Link className="nav__link" to='/'>Home</Link>
                    <Link className="nav__link" to='/marketplace'>Marketplace</Link>
                    <Link className="nav__link" to='/about'>About</Link>
                  </div>
                  <div>
                    <p>Welcome back, { state.user.email }</p>
                    <Link className="nav__link" to='/createproduct'>
                      <i className="icon ion-md-add-circle"></i>
                    </Link>
                    <Link className="nav__link" to='/cart'>
                      <i className="icon ion-md-cart"></i>
                    </Link>
                    <Link className="nav__link" to='/account'>
                      <i className="icon ion-md-person"></i>
                    </Link>
                    <Link className="nav__link" to='/logout'>Log out</Link>
                  </div>
                </div>
              </div>
            )
          }
          else {
            return (
              <div className="nav">
                <div className="nav__brand">The Ends</div>
                <div className="nav__menu">
                  <div className="nav__links">
                    <Link className="nav__link" to='/'>Home</Link>
                    <Link className="nav__link" to='/marketplace'>Marketplace</Link>
                    <Link className="nav__link" to='/about'>About</Link>
                  </div>
                  <div>
                    <Link className="nav__link" to="/signup">Sign Up</Link>
                    <Link className="nav__link" to="/login">Log In</Link>
                  </div>
                </div>
              </div>
            )
          };
        }
      }
    </AuthContext.Consumer>
  );
}

export default Navbar;
