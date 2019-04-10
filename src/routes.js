import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Context
import AuthContext from './context/auth';

// Containers
import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import LogOut from './containers/LogOut';
import Stores from './containers/Stores';
import Store from './containers/Store';
import Product from './containers/Product';
import CreateProduct from './containers/CreateProduct';

// Components 
import Navbar from './components/Navbar';
import Home from './components/Home';

const Routes = ({ state }) => {
  return (
    <HashRouter>
      <AuthContext.Provider value={state}>
        <>
          <Route path='/' component={Navbar} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/logout' component={LogOut} />
            <Route path='/stores' component={Stores} />
            <Route path='/store/:id' component={Store} />
            <Route path='/product/:id' component={Product} />
            <Route path='/createproduct' component={CreateProduct} />
          </Switch>
        </>
      </AuthContext.Provider>
    </HashRouter>
  )
}

export default Routes;
