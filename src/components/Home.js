import React, { Component } from 'react';
// import axios from 'axios';
import { AuthContext } from '../context/auth';
// import url from '../config/url';


class Home extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      uid: '',
      token: '',
    };
  }


  componentDidMount() {
    if (this.context) {
      const { email, uid, token } = this.context;

      this.setState({ email, uid, token });
    }
  }

  // ! to test public and private routes
  // handlePublicRoute = () => {
  //   axios.get(`${url}/user/1`)
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // handlePrivateRoute = () => {
  //   axios.get(`${url}/user/1/protected`, { token: this.state.token })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  handleState = (user) => {
    this.setState({ email: user.email });
  }


  render() {
    return (
      <>
        <AuthContext.Consumer>
          {
            (state) => {
              if (state.user) {
                return (
                  <>
                    <h2>Welcome to The Ends</h2>
                    <button type="button" onClick={this.handlePublicRoute}>click for the public route</button>
                    <button type="button" onClick={this.handlePrivateRoute}>click for the private route</button>
                  </>
                );
              }
              return <h1>Please log in!</h1>;
            }
          }
        </AuthContext.Consumer>
      </>
    );
  }
}

Home.contextType = AuthContext;

export default Home;
