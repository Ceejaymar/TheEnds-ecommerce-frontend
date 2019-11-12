import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../context/auth';

class Account extends Component {
  // static defaultProps = this.context;
  constructor(props) {
    super(props);

    const { email } = this.context;

    this.state = {
      email,
    };
  }

  render() {
    const { email } = this.state;

    return (
      <AuthContext.Consumer>
        {
          (state) => {
            if (state.user) {
              return (
                <div>
                  welcome
                  {`${email}`}
                </div>
              );
            }
            return (
              <Redirect to="/" />
            );
          }
        }
      </AuthContext.Consumer>
    );
  }
}

Account.contextType = AuthContext;

export default Account;
