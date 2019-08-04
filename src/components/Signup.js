import React from 'react';
import { Button, Form, FormGroup, Label} from 'reactstrap';
import Axios from 'axios';


 class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username : '',
            email : '',
            password: ''
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
    
    onSubmit(e){
        e.preventDefault();

        Axios.post('http://192.168.43.175:3000/users/register/',
        {
          userName:this.state.username,
          email:this.state.email,
          password:this.state.password
        }).then((res)=>{console.log(res);
      this.setState({
      username : '',
      email : '',
      password: ''
  });

  this.props.history.push("/");});

        // console.log(`Form submitted`);
        // console.log(`username : ${this.state.username}`);
        // console.log(`email : ${this.state.email}`);
        // console.log(`password : ${this.state.password}`);
        // this.props.history.push("/");
    }
    
  render() {
    return (
      
    <div className="FormCenter">
      <Form onSubmit={this.onSubmit} className="FormFields">
        <FormGroup className="FormField">
          <Label className="FormField__Label"  htmlFor="name">Username</Label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.username} onChange={this.onChangeUsername}  />
        </FormGroup>
        <FormGroup className="FormField">
          <Label className="FormField__Label" htmlFor="email">Email</Label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.onChangeEmail}  />
        </FormGroup>
        <FormGroup className="FormField">
          <Label className="FormField__Label" htmlFor="password">Password</Label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"  value={this.state.password} onChange={this.onChangePassword} />
        </FormGroup>
        <FormGroup>
        <Button size="lg" color="info" block type="submit">
            Sign-Up
        </Button>
        </FormGroup>
      </Form> 
      </div>
    
    );
  }
}

export default Signup;