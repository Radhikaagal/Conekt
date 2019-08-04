import React, {Component} from 'react';
import Axios from 'axios';
import {Button,Form} from 'reactstrap';

class Newsfeed extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            userToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDNkMTBhNzE0MmQxNDg5ODhjZjVjYyIsImlhdCI6MTU2NDcyNTU5Nn0.nZf4FydwbIU9gCblb16gUbonPXVxwHdu3KKxXz7ZZrE'}
    }

    onSubmit(e){
        e.preventDefault();
        Axios.get('http://192.168.43.175:3000/users/logout/',
        { 'headers': { 'userToken': this.state.userToken } })
        .then((response => {
        console.log(response.data);
        this.props.history.push("/login");
        })
        .catch((error) => {
        console.log(error);
        }));
    }

    render()
    {
        return(
            <Form onSubmit={this.onSubmit}>
                <Button>Signout</Button>
            </Form>
        );
    }
}

export default Newsfeed;