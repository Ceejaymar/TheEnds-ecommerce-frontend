import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import firebase from '../firebase';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userUid, setUserUid] = useState('');
  const [token, setToken] = useState('');

  const getFirebaseToken = async () => {
    try {
      const userToken = await firebase.auth().currentUser.getIdToken(false);

      setToken(userToken);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (curUser) => {
      if (curUser) {
        const { email, uid } = curUser;

        setUser(curUser);
        setUserEmail(email);
        setUserUid(uid);
        await getFirebaseToken();
      } else {
        setUser('');
        setUserEmail('');
        setUserUid('');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, userEmail, userUid, token }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};


export {
  AuthContext,
  AuthProvider,
};
