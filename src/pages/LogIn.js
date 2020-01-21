import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from '../firebase';
import { AuthContext } from '../context/auth';
import useInputStateHook from '../hooks/useInputStateHook';

const LogIn = (props) => {
  const [email, setEmail] = useInputStateHook('');
  const [password, setPassword] = useInputStateHook('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
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
            <div className="Login">
              <div className="Login__content">
                <figure className="Login__img">
                  <img src="https://images.unsplash.com/photo-1573316494404-0b90c43f4f03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="Black woman in colorful attire" />
                </figure>
                <button className="Login__go-back" type="button" onClick={props.history.goBack}>
                  <i className="icon ion-md-arrow-round-back Login__icon" />
                  back
                </button>
                <Link className="Login__link Login__link--home" to="/">home</Link>
                <Link className="Login__link Login__link--about" to="/about">about</Link>
                <h2 className="Login__header">Welcome back to The Ends!</h2>
                <h3 className="Login__sub-header">We have a bunch of new styles for you to enjoy!</h3>

                <form className="Login-form">
                  <input className="Login-form__input" type="email" name="email" value={email} onChange={setEmail} placeholder="email" />
                  <input className="Login-form__input" type="password" name="password" value={password} onChange={setPassword} placeholder="password" />
                  <Link className="Login-form__signup" to="/signup">sign up</Link>
                  <button className="Login-form__login" type="button" onClick={handleSubmit}>log in</button>
                </form>
                {error !== '' ? <div>{error}</div> : ''}
              </div>
            </div>
          );
        }
      }
    </AuthContext.Consumer>
  );
};

LogIn.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default LogIn;
