import React, { Component } from "react";
import "./../styles/Feed.css";
import FeedNavbar from "./Feed-Navbar";
import PostsFeed from "./Posts-Feed";

export default class Commute extends Component {
  render() {
    return (
      <div className="bgimg">
        <div className="container">
          <FeedNavbar page="COMMUTE" />
          <br />
          <div className="row">
            <div className="col-md-12 text-left">
              <h6 className="intro">
                Why not rideshare? <br /> See who's on your route.
              </h6>
              <br />
            </div>
          </div>
          <div className="row">
            <PostsFeed />
          </div>
          <br />
          <div className="row">
            <PostsFeed />
          </div>
          <br />
        </div>
      </div>
    );
  }
}
