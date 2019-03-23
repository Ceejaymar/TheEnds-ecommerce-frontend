import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log('sign up response', response);
      })
      .catch(err => {
        const { message } = err;

        this.setState({ error: message });
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
          user => {
            if (user) {
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