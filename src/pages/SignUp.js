import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import firebase from '../firebase';
import { AuthContext } from '../context/auth';
import url from '../config/url';
import useInputStateHook from '../hooks/useInputStateHook';

const SignUp = () => {
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
  const displayForm = (
    <div>
      <hr />
      <h2>Sign Up</h2>
      <form>
        <input type="email" name="email" value={email} onChange={setEmail} placeholder="email" />
        <input type="password" name="password" value={password} onChange={setPassword} placeholder="password" />
        <input type="text" name="fname" value={fname} onChange={setFname} placeholder="first name" />
        <input type="text" name="lname" value={lname} onChange={setLname} placeholder="last name" />
        <input type="text" name="address" value={address} onChange={setAddress} placeholder="street" />
        <input type="text" name="city" value={city} onChange={setCity} placeholder="city" />
        <input type="text" name="state" value={state} onChange={setState} placeholder="state" />
        <input type="text" name="zipcode" value={zipcode} onChange={setZipcode} placeholder="zipcode" />
        <button type="button" onClick={handleSubmit}>sign up</button>
      </form>
      {displayError}
      <hr />
    </div>
  );

  return (
    <AuthContext.Consumer>
      {
        (user) => {
          if (user.userUid) {
            return <Redirect to="/" />;
          }
          return displayForm;
        }
      }
    </AuthContext.Consumer>
  );
};

export default SignUp;
