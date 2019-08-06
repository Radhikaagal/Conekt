import React, { Component } from "react";

import "./../styles/Feed.css";

export default class CardFeed extends Component {
  render() {
    return (
      <div>
        <div className="card">
<<<<<<< HEAD
          <img
            className="card-img-top"
            src={this.props.pic}
            alt="Functional card"
          />
=======
          <img className="card-img-top" src={this.props.pic} alt="whatever" />
>>>>>>> d9de1f7d26289670cf316d06f621471cc62fbf84
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.content}</p>
            <a href={this.props.link} className="btn btn-primary">
              View
            </a>
          </div>
        </div>
      </div>
    );
  }
}
