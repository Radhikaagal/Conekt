import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
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

        Axios.post('http://192.168.43.175:3000/users/login/',
        {
          userId:this.state.username,
          password:this.state.password
        }).then((res)=>{console.log(res);
      this.setState({
      username : '',
      password: ''
  });
  this.props.history.push("/");
  });

        //console.log(`Form submitted`);
        //console.log(`username : ${this.state.username}`);
        // console.log(`email : ${this.state.email}`);
        //console.log(`password : ${this.state.password}`);
        
}
  render() {
    return (
    <div className="container-fluid" style={{width:'40%', backgroundColor: 'lightblue', opacity:'0.9', borderRadius: '20px' }}>
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>Username or Email</Label>
          <Input type="text" value={this.state.username} onChange={this.onChangeUsername}  />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" value={this.state.password} onChange={this.onChangePassword} />
        </FormGroup>
        <FormGroup>
        <Button size="lg" color="primary" block>
            Login
        </Button>
        </FormGroup>
      </Form> 
      </div>
    );
  }
}

export default Login;