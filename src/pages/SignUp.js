import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import firebase from '../firebase';
import { AuthContext } from '../context/auth';
import url from '../config/url';
import useInputStateHook from '../hooks/useInputStateHook';

const SignUp = (props) => {
  const [email, setEmail] = useInputStateHook('');
  const [password, setPassword] = useInputStateHook('');
  const [fname, setFname] = useInputStateHook('');
  const [lname, setLname] = useInputStateHook('');
  const [address, setAddress] = useInputStateHook('');
  const [city, setCity] = useInputStateHook('');
  const [state, setState] = useInputStateHook('');
  const [zipcode, setZipcode] = useInputStateHook('');
  const [error, setError] = useState('');
  const [uid, setUid] = useState('');

  const createUser = () => {
    axios.post(`${url}/user/`, {
      fname,
      lname,
      email,
      uid,
      address,
      city,
      state,
      zipcode,
      seller: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);

      setUid(response.user.uid);
      createUser();
    } catch (err) {
      setError(err.message);
    }
  };

  const displayError = error !== '' ? <div>{error}</div> : '';

  return (
    <AuthContext.Consumer>
      {
        (user) => {
          if (user.userUid) {
            return <Redirect to="/" />;
          }
          return (
            <div className="Auth">
              <div className="Auth__content">
                {/* <h2 className="Auth__header">You are almost at the ends</h2> */}
                <figure className="Auth__img">
                  <img src="https://images.unsplash.com/photo-1490551632573-78c6c247f5d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="Black woman is colorful attire" />
                </figure>
                <button className="Auth__go-back" type="button" onClick={props.history.goBack}>
                  <i className="icon ion-md-arrow-round-back Auth__icon" />
                  back
                </button>
                <Link className="Auth__link Auth__link--home" to="/">home</Link>
                <Link className="Auth__link Auth__link--about" to="/about">about</Link>
                <h2 className="Auth__header">Welcome to The Ends!</h2>
                {/* <h3 className="Login__sub-header">We have a bunch of new styles for you to enjoy!</h3> */}

                <form className="Auth-form">
                  <input className="Auth-form__input Auth-form__input--fname" type="text" name="fname" value={fname} onChange={setFname} placeholder="first name" />
                  <input className="Auth-form__input Auth-form__input--lname" type="text" name="lname" value={lname} onChange={setLname} placeholder="last name" />
                  <input className="Auth-form__input Auth-form__input--email" type="email" name="email" value={email} onChange={setEmail} placeholder="email" />
                  <input className="Auth-form__input Auth-form__input--password" type="password" name="password" value={password} onChange={setPassword} placeholder="password" />
                  <input className="Auth-form__input Auth-form__input--address" type="text" name="address" value={address} onChange={setAddress} placeholder="street" />
                  <input className="Auth-form__input Auth-form__input--city" type="text" name="city" value={city} onChange={setCity} placeholder="city" />
                  <input className="Auth-form__input Auth-form__input--state" type="text" name="state" value={state} onChange={setState} placeholder="state" />
                  <input className="Auth-form__input Auth-form__input--zipcode" type="text" name="zipcode" value={zipcode} onChange={setZipcode} placeholder="zipcode" />
                  <Link className="Auth-form__login" to="/login">log in</Link>
                  <button className="Auth-form__signup" type="button" onClick={handleSubmit}>sign up</button>
                </form>
                {displayError}
              </div>
            </div>
          );
        }
      }
    </AuthContext.Consumer>
  );
};

SignUp.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default SignUp;
