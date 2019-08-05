import React, { Component } from "react";
import "./../styles/Feed.css";
import FeedNavbar from "./Feed-Navbar";
import CardFeed from "./Cards-Feed";
import commute from "./../commute.jpg";
import dorm from "./../dorm.jpg";
import notes from "./../notes.png";

export default class Timeline extends Component {
  render() {
    return (
      <div className="bgimg">
        <div className="container">
          <FeedNavbar />
          <div className="card-columns deck-container">
            <CardFeed
              pic={commute}
              title="Commute"
              content="Carpooling and stuff"
              link="/commute"
            />
            <CardFeed
              pic={dorm}
              title="Dormitory"
              content="Look for rommates"
              link="/dorm"
            />
            <CardFeed
              pic={notes}
              title="Notes"
              content="Study notes"
              link="notes"
            />
          </div>
        </div>
      </div>
    );
  }
}
