import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


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

        console.log(`Form submitted`);
        console.log(`username : ${this.state.username}`);
        console.log(`email : ${this.state.email}`);
        console.log(`password : ${this.state.password}`);

        this.setState({
            username : '',
            email : '',
            password: ''
        });


    }
    
  render() {
    return (
    <div className="container-fluid" style={{width:'40%', backgroundColor: 'lightblue', opacity:'0.9', borderRadius: '20px' }}>
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" value={this.state.username} onChange={this.onChangeUsername}  />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email"  value={this.state.email} onChange={this.onChangeEmail}  />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" value={this.state.password} onChange={this.onChangePassword} />
        </FormGroup>
        <FormGroup>
        <Button size="lg" color="secondary" block>
            Submit
        </Button>
        </FormGroup>
      </Form> 
      </div>
    );
  }
}

export default Signup;