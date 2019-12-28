import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../firebase';
import { AuthContext } from '../context/auth';
import useInputStateHook from '../hooks/useInputStateHook';

function LogIn() {
  const [email, setEmail] = useInputStateHook('');
  const [password, setPassword] = useInputStateHook('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      // eslint-disable-next-line no-console
      console.log('sign up response', response);
    } catch (err) {
      setError(err.message);
    }
  }

  const displayError = error !== '' ? <div>{error}</div> : '';
  const displayForm = (
    <div>
      <hr />
      <h2>Log In</h2>
      <form>
        <input type="email" name="email" value={email} onChange={setEmail} placeholder="email" />
        <input type="password" name="password" value={password} onChange={setPassword} placeholder="password" />
        <button type="button" onClick={handleSubmit}>log in</button>
      </form>
      {displayError}
      <hr />
    </div>
  );

  console.log('user', email)
  console.log('password', password)

  return (
    <AuthContext.Consumer>
      {
        (state) => {
          // eslint-disable-next-line no-console
          console.log('user in login', state);
          if (state.user) {
            return <Redirect to="/" />;
          }
          return displayForm;
        }
      }
    </AuthContext.Consumer>
  );
}

export default LogIn;
