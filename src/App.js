import React, { Component } from 'react';

import firebase from './firebase';
import Routes from './routes';

import './css/style.css';

class App extends Component {
  state = {
    user: '',
    email: '',
    uid: '',
    token: '',
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const { email, uid } = user;

        await this.setState({ user, email, uid });
        await this.getFirebaseToken();
      } else {
        this.setState({ user: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getFirebaseToken = async () => {
    try {
      const token = await firebase.auth().currentUser.getIdToken(false);
      await this.setState({ token });
    } catch (error) {
      console.log(error);
    }
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
