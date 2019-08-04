import React, {Component} from 'react';
import { Button, Form, FormGroup, Label} from 'reactstrap';
import Axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Newsfeed from "./../components/Newsfeed";
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
        Axios.post('http://192.168.43.175:3000/users/login/',
        {
          userId:this.state.username,
          password:this.state.password
        }).then((res)=>{console.log(res.data.data.userToken);
      this.setState({
      username : '',
      password: ''
  });
  this.props.history.push("/newsfeed");
  });

      //   console.log(`Form submitted`);
      //   console.log(`username : ${this.state.username}`);
      //  console.log(`password : ${this.state.password}`);
      //   this.props.history.push("/");
        
}
  render() {
    return (
     <Router> 
    <div className="FormCenter">
      <Form onSubmit={this.onSubmit} className="FormFields">
        <FormGroup className="FormField">
          <Label className="FormField__Label"  htmlFor="name">Username or Email</Label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter your username or email" name="name" value={this.state.username} onChange={this.onChangeUsername}  />
        </FormGroup>
        <FormGroup className="FormField">
          <Label className="FormField__Label" htmlFor="password">Password</Label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.onChangePassword} />
        </FormGroup>
        <FormGroup className="FormField">
        <Route path="/newsfeed" component={Newsfeed}>
          
        <Button size="lg" color="info" block type="submit">
           Sign-In
        </Button>
        
        </Route>
        </FormGroup>
      </Form> 
      </div>
      </Router>
      
    );
  }
}

export default Login;