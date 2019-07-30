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
                <Link to='/marketplace'>Marketplace</Link>
                <p>Welcome back, { state.user.email }</p>
                <Link to='/createproduct'>
                  <i className="icon ion-md-add-circle"></i>
                </Link>
                <br />
                <Link to='/cart'>
                  <i className="icon ion-md-cart"></i>
                </Link>
                <br />
                <Link to='/account'>
                  <i className="icon ion-md-person"></i>
                </Link>
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
                <Link to='/marketplace'>Marketplace</Link>
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
