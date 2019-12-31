import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from '../firebase';

const LogOut = ({ history }) => {
  useEffect(() => {
    async function signOut() {
      await firebase.auth().signOut();
      await history.push('/');
    }

    signOut();
  }, [history]);

  return (
    <div>
      logging out fam!
    </div>
  );
};

LogOut.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default LogOut;
