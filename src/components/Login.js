import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "./../actions/auth";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Timeline from "./Timeline";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    userId: "",
    password: ""
  });

  const { userId, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(userId, password);
  };

  if (isAuthenticated) {
    console.log("something should happen");
    return <Redirect push to="/newsfeed" />;
    window.location.reload();
  }

  return (
    <Fragment>
      <div className="FormCenter">
        <form onSubmit={e => onSubmit(e)} className="FormFields">
          <div className="form-group FormField">
            <label className="FormField__Label" htmlFor="name">
              Username or Email
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your username or email"
              name="userId"
              value={userId}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group FormField">
            <input
              className="btn btn-dark btn-block"
              color="info"
              type="submit"
              value="Sign-In"
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
