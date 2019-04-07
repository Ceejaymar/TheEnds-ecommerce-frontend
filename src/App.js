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
    user: '',
    email: '',
    uid: '',
    token: '',
    
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(user) {
        const { email, uid, ra } = user; // ra in the user object is the token
        
        this.setState({ user, email, uid }, () => {
          this.getFirebaseToken()
        });
      }
      else {
        this.setState({ user: null });
      }
    });
  }

  getFirebaseToken = () => {
    console.log('bruh idkkkkk');
    firebase.auth().currentUser.getIdToken(false)
      .then(token => {
        this.setState({ token });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    return (
      <HashRouter>
        <AuthContext.Provider value={ this.state }>
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
