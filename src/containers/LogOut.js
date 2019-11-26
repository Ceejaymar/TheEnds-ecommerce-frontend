import React, { Component } from 'react';
import firebase from '../firebase';

class LogOut extends Component {
  componentDidMount() {
    const { history } = this.props;

    firebase.auth().signOut()
      .then(() => {
        history.push('/');
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
