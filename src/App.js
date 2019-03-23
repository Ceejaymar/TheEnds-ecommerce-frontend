import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import SignUp from './components/SignUp';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <>
          <Route path='/' component={ Navbar } />
          <Route path='/signup' component={ SignUp } />
        </>
      </HashRouter>
    );
  }
}

export default App;
