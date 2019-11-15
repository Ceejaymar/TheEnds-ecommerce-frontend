import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Context
import AuthContext from './context/auth';

// Containers
import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import LogOut from './containers/LogOut';
import marketplace from './containers/MarketPlace';
import Store from './containers/Store';
import Product from './containers/Product';
import CreateProduct from './containers/CreateProduct';
import ShoppingCart from './containers/ShoppingCart';

// Components
import Navbar from './components/Navbar';
import Account from './containers/Account';
import Home from './components/Home';
import LandingPage from './components/LandingPage';

const Routes = ({ state }) => (
  <HashRouter>
    <AuthContext.Provider value={state}>
      <>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/account" component={Account} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/createproduct" component={CreateProduct} />
          <Route path="/login" component={LogIn} />
          <Route path="/logout" component={LogOut} />
          <Route path="/marketplace" component={marketplace} />
          <Route path="/product/:id" component={Product} />
          <Route path="/signup" component={SignUp} />
          <Route path="/store/:id" component={Store} />
          {/* Change Landing to homepage */}
          <Route path="/landing" component={LandingPage} />
          <Route render={() => 'Wrong route fam'} />
        </Switch>
      </>
    </AuthContext.Provider>
  </HashRouter>
);

export default Routes;
