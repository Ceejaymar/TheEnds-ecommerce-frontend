import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../context/auth';

class Account extends Component {
  static contextType = AuthContext;
  // static defaultProps = this.context;
  state = {
    user: this.context.email
  }

  render() {
    return (
      <AuthContext.Consumer>
        {
          state => {
            if (state.user) {
              return (
                <div>
                  welcome {`${state.email}`}
                </div>
              )
            }
            else {
              return (
                <Redirect to='/' />
              )
            }
          }
        }
      </AuthContext.Consumer>
    );
  }
}

export default Account;
