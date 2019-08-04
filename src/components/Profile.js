import React, {Component} from 'react';
import Axios from 'axios';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import {gear} from 'react-icons-kit/fa/gear'
import { Navbar, NavbarBrand, Container} from 'reactstrap';
import "./../styles/Profile.css";
class Profile extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        // Axios.get('http://192.168.43.175:3000/users/logout/',
        // { 'headers': { 'userToken': this.state.userToken } })
        // .then((response => {
        // console.log(response.data);
        // this.props.history.push("/login");
        // })
        // .catch((error) => {
        // console.log(error);
        // }));
        this.props.history.push("/login")
    }

    render()
    {
        return(
            <div className="bgimg2">
             <Container className="bgprofile">
                <Navbar>
                     <NavbarBrand>
                        <Icon size={32} icon={home} />
                     </NavbarBrand>

                     
                </Navbar>
            </Container>
            </div>
        );
    }
}

export default Profile;