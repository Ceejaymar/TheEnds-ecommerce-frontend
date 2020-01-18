import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Context
import { AuthProvider } from './context/auth';
import { CartProvider } from './context/cart';

// Pages
import About from './pages/About';
import Account from './pages/Account';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import LogOut from './pages/LogOut';
import Marketplace from './pages/MarketPlace';
import Store from './pages/Store';
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import ShoppingCart from './pages/ShoppingCart';

import Home from './pages/Home';

// Components
import Navbar from './components/Navbar';

const Routes = withRouter(({ location }) => (
  <AuthProvider>
    <CartProvider>
      <>
        {
          location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />
        }
        <Route render={() => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={600}
              classNames="fade"
            >
              <Switch location={location}>
                <Route path="/" exact component={Home} />
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
            </CSSTransition>
          </TransitionGroup>
        )}
        />
      </>
    </CartProvider>
  </AuthProvider>
));

export default Routes;
