import React, {Component} from 'react';
import Axios from 'axios';


class Login extends Component{
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username : '',
            password: ''
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    
    
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }
    
    onSubmit(e){
      e.preventDefault();
        Axios.post('https://conektapi.herokuapp.com/users/login/',
        {
          userId:this.state.username,
          password:this.state.password
        }).then((res)=>{console.log(res.data.data.userToken);
      this.setState({
      username : '',
      password: ''
  });
  });

      //   console.log(`Form submitted`);
      //   console.log(`username : ${this.state.username}`);
      //  console.log(`password : ${this.state.password}`);
      //   this.props.history.push("/");
        
}
  render() {
    return ( 
    
    <div className="FormCenter">
      <form onSubmit={this.onSubmit} className="FormFields">
        <div className="form-group FormField">
          <label className="FormField__Label"  htmlFor="name">Username or Email</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter your username or email" name="name" value={this.state.username} onChange={this.onChangeUsername}  />
        </div>
        <div className="form-group FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.onChangePassword} />
        </div>
        <div className="form-group FormField">
        <input className="btn btn-info btn-block" color="info" type="submit" value="Sign-In" />
        </div>
      </form> 
      </div>
     
      
    );
  }
}

export default Login;