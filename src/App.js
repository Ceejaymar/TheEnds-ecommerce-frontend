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
    this.unsubscribe = firebase.auth().onAuthStateChanged(async user => {
      if(user) {
        const { email, uid } = user;

        await this.setState({ user, email, uid });
        await this.getFirebaseToken();
      }
      else {
        this.setState({ user: null });
      }
    });
  }

  // TODO: Finish converting to async/await
  getFirebaseToken = async () => {
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
