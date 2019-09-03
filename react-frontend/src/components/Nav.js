import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  const display_form = props.display_form;
  const logged_out_nav = (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">JWTAuth</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={(display_form === 'login') ? 'nav-item active':'nav-item'} onClick={() => props.display_form('login')}>
                        <a  className="nav-link" href="#">Login</a>
                    </li>
                    <li className={(display_form === 'signup') ? 'nav-item active':'nav-item'} onClick={() => props.display_form('signup')}>
                        <a className="nav-link" href="#">SignUp</a>
                    </li>
                </ul>
            </div>
        </nav>
  );

  const logged_in_nav = (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">JWTAuth</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active" onClick={props.handle_logout}>
                        <a className="nav-link" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};