import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./sponsors.css";

export default class Sponsors extends Component {
  render() {
    return (
      <div id="sponsors" className="sponsors-main">
        <Container className="sponsors-container">
          <Row>
            <h1 className="sponsors-title"> SPONSORS </h1>
          </Row>
          <Row>
            <h2 className="sponsors-details"> Coming Soon.... </h2>
          </Row>
        </Container>
      </div>
    );
  }
}
