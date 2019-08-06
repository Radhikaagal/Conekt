import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "./../actions/alerts";
import PropTypes from "prop-types";
import { login } from "./../actions/auth";
class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      userId: "",
      password: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      userId: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.userId, this.state.password);
    //         Axios.post('https://conektapi.herokuapp.com/users/login/',
    //         {
    //           userId:this.state.username,
    //           password:this.state.password
    //         }).then((res)=>{console.log(res.data.data.userToken);
    //       this.setState({
    //       username : '',
    //       password: ''
    //   });
    //   }).catch(error => {

    //     this.props.setAlert(error.response.data.message,'danger');

    // });

    this.setState({
      userId: "",
      password: ""
    });
  }
  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.onSubmit} className="FormFields">
          <div className="form-group FormField">
            <label className="FormField__Label" htmlFor="name">
              Username or Email
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your username or email"
              name="name"
              value={this.state.userId}
              onChange={this.onChangeUsername}
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
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group FormField">
            <input
              className="btn btn-info btn-block"
              color="info"
              type="submit"
              value="Sign-In"
            />
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};
export default connect(
  null,
  { setAlert, login }
)(Login);
