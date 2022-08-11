import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./prize.css";

export default class Prizes extends Component {
  render() {
    return (
      <div id="prizes" className="prizes-main">
        <Container className="prize-container">
          <Row>
            <h1 className="title"> PRIZES </h1>
          </Row>
          <Row>
            <h2 className="details"> Coming Soon.... </h2>
          </Row>
        </Container>
      </div>
    );
  }
}
