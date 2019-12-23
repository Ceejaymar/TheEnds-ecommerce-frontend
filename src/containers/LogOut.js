import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

LogOut.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default LogOut;
