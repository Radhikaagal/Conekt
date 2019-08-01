import React, {Component} from 'react';
//import logo from "./../Images/homepageimg.jpg";
import "./../styles/Homepage.css";
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from "./../components/Signup";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
  } from 'reactstrap';
  import { Jumbotron, Container, Button } from 'reactstrap';

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
    <Router>
      <div className="bgimg">
        <div>
        <Navbar color="dark" light expand="md">
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="options">
                <Link to="/"><Button>Login</Button></Link>
              </NavItem>&nbsp;&nbsp;
              <NavItem className="options">
                <Link to="/signup"><Button>Sign Up</Button></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    <div>
    <Jumbotron style={{background:'transparent'}}>
        <Container fluid>
         <h1 className="display-3" align="center">Conekt</h1>
         <p className="lead" align="center">Find Your Group</p>
        </Container>
    </Jumbotron> 
    </div>
    </div>
    <Route path ="/signup" component={Signup} />
    </div>
    </Router>  
    );
  }
}

export default Homepage;