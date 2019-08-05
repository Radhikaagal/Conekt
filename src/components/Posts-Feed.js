import React, { Component } from "react";
import "./../styles/Feed.css";
import { Collapse, CardBody, Card } from "reactstrap";

export default class PostsFeed extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    // this.post = this.post.bind(this);
    this.state = {
      collapse: false
    };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div className="col">
        <div class="card">
          <div class="card-header">
            Name of post creator
            <button
              className="btn btn-info btn-sm float-right"
              title="Reply"
              onClick={this.toggle}
            >
              <i className="fa fa-reply" aria-hidden="true" />
            </button>
          </div>

          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Contents of the text post</p>
              <footer class="blockquote-footer">Posted on 16/07/1998</footer>
            </blockquote>
          </div>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                <div className="md-form">
                  <input type="text" id="form1" className="form-control" />
                  <button
                    className="btn btn-info btn-sm float-right"
                    onPost={this.post}
                  >
                    Post
                  </button>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
}
