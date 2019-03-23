import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import LogOut from './containers/LogOut';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <>
          <Route path='/' component={ Navbar } />
          <Route path='/' exact component={ Home } />
          <Route path='/signup' component={ SignUp } />
          <Route path='/login' component={ LogIn } />
          <Route path='/logout' component={ LogOut } />
        </>
      </HashRouter>
    );
  }
}

export default App;
