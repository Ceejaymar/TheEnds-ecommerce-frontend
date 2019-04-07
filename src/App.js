import React, { Component } from 'react';

import firebase from './firebase';
import Routes from './routes';

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
      <>
        <Routes state={this.state} />
      </>
    );
  }
}

export default App;
