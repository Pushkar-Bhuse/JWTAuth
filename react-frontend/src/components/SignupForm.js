import React from 'react';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handle_signup(e, this.state)}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handle_change} className="form-control" placeholder="Enter Username"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handle_change} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <button type="submit" className="btn btn-primary">Signup</button>
    </form>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};