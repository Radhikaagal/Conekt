import React, {Component} from 'react';
//import logo from "./../Images/homepageimg.jpg";
import "./../styles/Homepage.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';
  import { Jumbotron, Container } from 'reactstrap';

 class Homepage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}>Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    <div>
    <Jumbotron style={{backgroundColor: 'lightblue'}}>
        <Container fluid>
         <h1 className="display-3" align="center">Conekt</h1>
         <p className="lead" align="center">Find Your Group</p>
        </Container>
    </Jumbotron> 
    </div>
    <div className="footer">
        <p>find us here blah blah</p>
    </div>
    </div>  
    );
  }
}

export default Homepage;