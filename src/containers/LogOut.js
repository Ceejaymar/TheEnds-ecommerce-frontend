import React, { Component } from 'react';
import firebase from '../firebase';

class LogOut extends Component {
  componentDidMount() {
    firebase.auth().signOut()
      .then(() => {
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div>
        logging out fam!
      </div>
    );
  }
}

export default LogOut;
