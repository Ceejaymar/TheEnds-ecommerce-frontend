import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import AuthContext from '../context/auth';

import styles from '../styles/NavbarStyles';

const Navbar = ({ classes }) => {
  return (
    <AuthContext.Consumer>
      {
        state => {
          if (state.user) {
            return (
              <div className={classes.nav}>
                <div className={classes.brand}>The Ends</div>
                <div className={classes.menu}>
                  <div className={classes.navLinks}>
                    <Link className={classes.link} to='/'>Home</Link>
                    <Link className={classes.link} to='/marketplace'>Marketplace</Link>
                    <Link className={classes.link} to='/about'>About</Link>
                  </div>
                  <div>
                    <p>Welcome back, { state.user.email }</p>
                    <Link className={classes.link} to='/createproduct'>
                      <i className="icon ion-md-add-circle"></i>
                    </Link>
                    <Link className={classes.link} to='/cart'>
                      <i className="icon ion-md-cart"></i>
                    </Link>
                    <Link className={classes.link} to='/account'>
                      <i className="icon ion-md-person"></i>
                    </Link>
                    <Link className={classes.link} to='/logout'>Log out</Link>
                  </div>
                </div>
              </div>
            )
          }
          else {
            return (
              <div className={classes.nav}>
                <div className={classes.brand}>The Ends</div>
                <div className={classes.menu}>
                  <div className={classes.navLinks}>
                    <Link className={classes.link} to='/'>Home</Link>
                    <Link className={classes.link} to='/marketplace'>Marketplace</Link>
                    <Link className={classes.link} to='/about'>About</Link>
                  </div>
                  <div>
                    <Link className={classes.link} to="/signup">Sign Up</Link>
                    <Link className={classes.link} to="/login">Log In</Link>
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

export default withStyles(styles)(Navbar);
