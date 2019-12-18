import React, { Component, createContext } from 'react';
import firebase from '../firebase';

const AuthContext = createContext(null);

class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      email: '',
      uid: '',
      token: '',
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const { email, uid } = user;

        this.setState({ user, email, uid });
        await this.getFirebaseToken();
      } else {
        this.setState({ user: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getFirebaseToken = async () => {
    try {
      const token = await firebase.auth().currentUser.getIdToken(false);
      this.setState({ token });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        { this.props.children }
      </AuthContext.Provider>
    );
  }
}

export {
  AuthContext,
  AuthProvider,
};
