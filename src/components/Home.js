import React, { Component } from 'react';
import axios from "axios";
import AuthContext from '../context/auth';

class Home extends Component {
  static contextType = AuthContext;

  state = {
    email: '',
    uid: '',
    token: ''
  }

  componentDidMount() {
    if (this.context) {
      const { email, uid, token } = this.context;

      this.setState({ email, uid, token });
    } 
  }

  handlePublicRoute = () => {
    axios.get('http://localhost:3000/user/1')
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  handlePrivateRoute = () => {
    axios.get('http://localhost:3000/user/1/protected', { token: this.state.token })
      .then(data => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleState = (user) => {
    this.setState({ email: user.email });
  }

  render() {
    return (
      <>          
        <AuthContext.Consumer>
        {
          state => {
            if (state.user) {
              return (
                <>
                  <h2>Welcome back, { state.email }</h2>
                  <h4>Your user id is: { state.uid }</h4>
                  <button onClick={this.handlePublicRoute}>click for the public route</button>
                  <button onClick={this.handlePrivateRoute}>click for the private route</button>
                </>
              )
            }
            else {
              return <h1>Please log in!</h1>
            }
          }
        }
      </AuthContext.Consumer>
    </>
    );
    }
  
}

export default Home;