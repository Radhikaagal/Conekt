import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

 class Signup extends React.Component {
  render() {
    return (
      <Form  onSubmit={(e)=>{
        e.preventDefault();
        props.onSubmit(e.target.recipeName.value);
        }}>
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input type="textarea" name="exampleUsername" id="exampleUsername" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Signup;