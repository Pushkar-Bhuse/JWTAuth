import React, { Component } from 'react';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: 'login',
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
    };
  }

  componentDidMount() {
    // console.log(localStorage.getItem('token'))
    if (this.state.logged_in) {
      fetch('http://localhost:8000/authenticate/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          if(json.username){
            this.setState({
              username: json.username,
              displayed_form: null
             });
          }
          else{
            this.setState({
              display_form:"login"
            })
          }
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if(res.status === 200){
          return res.json();
        }
        return null;
      })
      .then(json => {
        // console.log(json)
        if(json){
          // console.log("Im here");
          localStorage.setItem('token', json.token);
          this.setState({
            logged_in: true,
            displayed_form: null,
            username: json.user.username
          });
        }
        else{
          alert("Entered username or password is incorrect");
          this.setState({
            username: "",
            logged_in: false,
            displayed_form: 'login',
          })
        }
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/authenticate/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json.token);
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '', displayed_form:"login" });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
        break;
    }

    return (
      <div className="container-fluid">

        <div className="App">
          <Nav
            logged_in={this.state.logged_in}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
            active={this.state.displayed_form}
          />
          <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
          {form}
          </div>
          </div>
          <h3>
            {this.state.logged_in
              ? `Hello, ${this.state.username}`
              :" "}
          </h3>

        </div>
      </div>
    );
  }
}

export default App;