import React from 'react';
import conekt from "./../conekt.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Example extends React.Component {
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
        <Navbar light expand="md" className="navbar-custom">
          
              <NavbarBrand>
                <img src={conekt} height="40px" alt="conektlogo" />Conekt
              </NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink  href="/">SignUp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  href="/newsfeed">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  href="/profile">MyProfile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  href="/login">Logout</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}