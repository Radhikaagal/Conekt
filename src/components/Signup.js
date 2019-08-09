import React from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import {setAlert} from './../actions/alerts';
import PropTypes from 'prop-types';
 class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeOption = this.onChangeOption.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username : '',
            email : '',
            password: '',
            branch: 'Computer Science and Engineering'
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onChangeOption(e){
      this.setState({
          branch: e.target.value
      });
  }
    
   async onSubmit(e){
        e.preventDefault();
        // const newUser = {
        //   userName:this.state.username,
        //   email:this.state.email,
        //   password:this.state.password,
        //   profile:{branch: this.state.branch}
        // }

        // try{
        //   const config = {
        //     headers: {
        //       'Conent-Type':'application/json'
        //     }
        //   }

        //   const body = JSON.stringify(newUser);
        //   const res = await Axios.post('http://localhost:3000/users/register/',body,config);
        //   console.log(res.data)
        // } catch(err){
        //     console.log(err.response.error);
        // }
        Axios.post('https://conektapi.herokuapp.com/users/register/',
        {
          userName:this.state.username,
          email:this.state.email,
          password:this.state.password,
          profile:{branch: this.state.branch}
        }).then((res)=>{if(res.data.message){
          this.props.setAlert("User registered successfully! Please verify your email to continue",'success');
        }
      this.setState({
      username : '',
      email : '',
      password: '',
      branch: 'Computer Science and Engineering'
  });

  this.props.history.push("/");}).catch(error => {
    
      this.props.setAlert(error.response.data.message,'danger');
    
  });

        // console.log(`Form submitted`);
        // console.log(`username : ${this.state.username}`);
        // console.log(`email : ${this.state.email}`);
        // console.log(`password : ${this.state.password}`);
        // console.log(`branch : ${this.state.branch}`);
        // this.props.history.push("/");
    }
    
  render() {
    return (
      
    <div className="FormCenter">
      <form onSubmit={this.onSubmit} className="FormFields">
        <div className="form-group FormField">
          <label className="FormField__Label"  htmlFor="name">Username</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.username} onChange={this.onChangeUsername}  />
        </div>
        <div className="form-group FormField">
          <label className="FormField__Label" htmlFor="email">Email</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.onChangeEmail}  />
        </div>
        <div className="form-group FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"  value={this.state.password} onChange={this.onChangePassword} />
        </div>
        <div className="form-group FormField">
        <label className="FormField__Label">
          select your branch
          <select className="custom-select" editable="true"  value={this.state.branch} onChange={this.onChangeOption}>
              <option value="Computer Science and Enginnering">Computer Science and Enginnering</option>
              <option value="Information Science and Enginnering">Information Science and Enginnering</option>
              <option value="Electronics and Communications Enginnering">Electronics and Communications Enginnering</option>
              <option value="Electrical and Electronics Enginnering">Electrical and Electronics Enginnering</option>
              <option value="Electronics and Instrumentation Engineering">Electronics and Instrumentation Engineering</option>
              <option value="Mechanical Enginnering">Mechanical Enginnering</option>
              <option value="Civil Engineering">Civil Engineering</option>
          </select>
        </label>
        </div>
        <div className="form-group FormField">
        <input className="btn btn-dark btn-block" type="submit" value="Sign-Up" />
        </div>
      </form> 
      </div>
    
    );
  }
}

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired
};
export default connect(null, {setAlert})(Signup);