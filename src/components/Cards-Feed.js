import React, { Component } from "react";

import "./../styles/Feed.css";

export default class CardFeed extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={this.props.pic} alt="Card image" />
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
