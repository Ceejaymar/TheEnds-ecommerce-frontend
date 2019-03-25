import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import firebase from './firebase';

import AuthContext from './context/auth';
import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import LogOut from './containers/LogOut';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  state = { 
    user: ''
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({ user });
      }
      else {
        this.setState({ user: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    return (
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <>
            <Route path='/' component={ Navbar } />
            <Switch>
              <Route path='/' exact component={ Home } />
              <Route path='/signup' component={ SignUp } />
              <Route path='/login' component={ LogIn } />
              <Route path='/logout' component={ LogOut } />
            </Switch>
          </>
        </AuthContext.Provider>
      </HashRouter>
    );
  }
}

export default App;
