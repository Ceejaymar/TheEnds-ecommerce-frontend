import React, { Component } from 'react';
import firebase from '../firebase';

class LogIn extends Component {
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

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('sign up response', response);
      })
      .catch(err => {
        const { message } = err;
        
        this.setState({ error: message });
      });
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.props.history.push('/');
      }
      else {
        // ? What would go here?
      };
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { email, password, error } = this.state;
    const displayError = error !== '' ?  <div>{error}</div> : '';

    return (
      <div>
        <hr/>
          <h2>Log In</h2>
          <form>
            <input type='email' name='email' value={email} onChange={this.handleChange} placeholder='email' />
            <input type='password' name='password' value={password} onChange={this.handleChange} placeholder='password' />
            <button onClick={this.handleSubmit}>log in</button>
          </form>
          { displayError }
        <hr/>
      </div>
    );
  }
};

export default LogIn; 