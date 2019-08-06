import React from "react";
import axios from "axios";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class FeedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.state = {
      token: ""
    };
  }

  signOut(e) {
    e.preventDefault();
    this.setState({
      token: localStorage.getItem("userToken")
    });

    const toSend = { headers: { Authorization: `${this.state.token}` } };

    axios
      .post("https://conektapi.herokuapp.com/users/logout", toSend)
      .then(res => console.log(res.data))
      .then(() => this.props.history.push("/"))
      .catch(error => console.log(error));

    this.setState({
      token: ""
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand>{this.props.page}</NavbarBrand>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/profile/">Profile</NavLink>
            </NavItem>
            <NavItem>
              <button onClick={this.signOut}>Sign Out</button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
