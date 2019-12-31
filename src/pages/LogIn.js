import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../firebase';
import { AuthContext } from '../context/auth';
import useInputStateHook from '../hooks/useInputStateHook';

const LogIn = () => {
  const [email, setEmail] = useInputStateHook('');
  const [password, setPassword] = useInputStateHook('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      // eslint-disable-next-line no-console
      console.log('sign up response', response);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthContext.Consumer>
      {
        (user) => {
          if (user.userUid) {
            return <Redirect to="/" />;
          }
          return (
            <div>
              <hr />
              <h2>Log In</h2>
              <form>
                <input type="email" name="email" value={email} onChange={setEmail} placeholder="email" />
                <input type="password" name="password" value={password} onChange={setPassword} placeholder="password" />
                <button type="button" onClick={handleSubmit}>log in</button>
              </form>
              {error !== '' ? <div>{error}</div> : ''}
              <hr />
            </div>
          );
        }
      }
    </AuthContext.Consumer>
  );
};

export default LogIn;
