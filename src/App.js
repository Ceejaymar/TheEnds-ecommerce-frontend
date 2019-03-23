import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <>
          <Route path='/' component={ Navbar } />
          <Route path='/signup' component={ SignUp } />
          <Route path='/' exact component={ Home } />
        </>
      </HashRouter>
    );
  }
}

export default App;
