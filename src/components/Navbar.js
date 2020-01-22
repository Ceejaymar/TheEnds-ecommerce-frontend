import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { CartContext } from '../context/cart';

function Navbar() {
  const { cartQuantity } = useContext(CartContext);

  return (
    <AuthContext.Consumer>
      {
        (user) => {
          if (user.userUid) {
            return (
              <div className="Nav">
                <Link to="/" className="Nav__brand">The Ends</Link>
                <div className="Nav__menu">
                  <Link className="Nav__link" to="/">home</Link>
                  <Link className="Nav__link" to="/about">about</Link>
                  <Link className="Nav__link" to="/marketplace">marketplace</Link>
                  <Link className="Nav__link" to="/createproduct">
                    <i className="icon ion-md-add-circle Nav__icon" />
                  </Link>
                  <Link className="Nav__link Nav__cart" to="/cart">
                    <i className="icon ion-md-basket Nav__icon" />
                    {
                      cartQuantity !== 0 ? <span className="Nav__quantity">{cartQuantity}</span> : ''
                    }
                  </Link>
                  {/* <Link className="Nav__link" to="/account">
                    <i className="icon ion-md-person Nav__icon" />
                  </Link> */}
                  <Link className="Nav__link Nav__link--logout" to="/logout">log out</Link>
                </div>
              </div>
            );
          }

          return (
            <div className="Nav">
              <Link to="/" className="Nav__brand">The Ends</Link>
              <div className="Nav__menu">
                <Link className="Nav__link" to="/">Home</Link>
                <Link className="Nav__link" to="/about">About</Link>
                <Link className="Nav__link" to="/marketplace">Marketplace</Link>
                <Link className="Nav__link" to="/signup">Sign Up</Link>
                <Link className="Nav__link" to="/login">Log In</Link>
              </div>
            </div>
          );
        }
      }
    </AuthContext.Consumer>
  );
}

export default Navbar;
