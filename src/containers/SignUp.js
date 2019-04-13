import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import firebase from '../firebase';
import AuthContext from '../context/auth';
import url from '../config/url';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    uid: '',
    error: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.setState({ uid: res.user.uid });
        this.createUser();
      })
      .catch(err => {
        const { message } = err;

        this.setState({ error: message });
      });
  }

  createUser = () => {
    const { email, uid } = this.state;

    axios.post(`${url}/user/`, {
      fname: 'Carlos',
      lname: 'Martinez',
      email,
      uid,
      address: '212 yerr st',
      city: 'Brooklyn',
      state: 'NYC',
      zipcode: '11206',
      seller: true
    });
  }

  render() {
    const { email, password, error } = this.state;
    const displayError = error !== '' ? <div>{error}</div> : '';
    const displayForm = (
      <div>
        <hr />
        <h2>Sign Up</h2>
        <form>
          <input type='email' name='email' value={email} onChange={this.handleChange} placeholder='email' />
          <input type='password' name='password' value={password} onChange={this.handleChange} placeholder='password' />
          <button onClick={this.handleSubmit}>sign up</button>
        </form>
        {displayError}
        <hr />
      </div>
    );

    return (
      <AuthContext.Consumer>
        {
          state => {
            if (state.user) {
              return <Redirect to='/' />
            }
            else {
              return displayForm;
            }
          }
        }
      </AuthContext.Consumer>
    );
  }
}

export default SignUp; 