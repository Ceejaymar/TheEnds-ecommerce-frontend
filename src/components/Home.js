import React, { Component } from 'react';
import firebase from '../firebase';

class Home extends Component {
  state = {
    email: '',
    uid: '',
    token: ''
  }

  componentDidMount() {
    this.unsubscribed = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ email: user.email, uid: user.uid })
      };
    })
  }

  componentWillUnmount() {
    this.unsubscribed();
  }
  
  render() {
    const { email, uid } = this.state;

    if (!email) {
      return <h1>Please log in!</h1>
    }
    else {
      return (
        <>
          <div>
            <h2>Welcome back, { email }</h2>
            <h4>Your user id is: { uid }</h4>
          </div>
        </>
      );
    }
  }
}

export default Home;