import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AuthContext from './context/auth';
import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import LogOut from './containers/LogOut';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateProduct from './containers/CreateProduct';

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
            <Route path='/createproduct' component={CreateProduct} />
          </Switch>
        </>
      </AuthContext.Provider>
    </HashRouter>
  )
}

export default Routes;
