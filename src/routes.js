import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Context
import { AuthProvider } from './context/auth';

// Containers
import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import LogOut from './containers/LogOut';
import Marketplace from './containers/MarketPlace';
import Store from './containers/Store';
import Product from './containers/Product';
import CreateProduct from './containers/CreateProduct';
import ShoppingCart from './containers/ShoppingCart';

// Components
import About from './components/About';
import Navbar from './components/Navbar';
import Account from './containers/Account';
import LandingPage from './components/LandingPage';

const Routes = withRouter(({ location }) => (
  <AuthProvider>
    <>
      {
        location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />
      }
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/createproduct" component={CreateProduct} />
        <Route path="/login" component={LogIn} />
        <Route path="/logout" component={LogOut} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/product/:id" component={Product} />
        <Route path="/signup" component={SignUp} />
        <Route path="/store/:id" component={Store} />
        <Route render={() => 'Wrong route fam'} />
      </Switch>
    </>
  </AuthProvider>
));

export default Routes;
