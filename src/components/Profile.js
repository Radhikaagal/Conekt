import React, { Fragment } from "react";
import Axios from "axios";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { gear } from "react-icons-kit/fa/gear";
import Navbarr from "./../components/Navbarr";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";

import "./../styles/Profile.css";
const Profile = () => {
  return (
    <Fragment>
      <Navbarr />
      <Container>
        <Jumbotron fluid id="head">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image
                  id="img"
                  src="https://via.placeholder.com/171x180.jpg"
                  rounded
                />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Row id="options">
          <Col>POSTS</Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Profile;
