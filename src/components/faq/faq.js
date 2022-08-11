import React, { Component } from "react";
import "./faq.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class FAQ extends Component {
  render() {
    return (
      <div id="faq" className="faq-main">
        <Container className="faq-container">
          <Row>
            <h1 className="faq-title"> FAQ </h1>
          </Row>
          <Row>
            <h2 className="faq-details"> Coming Soon.... </h2>
          </Row>
        </Container>
      </div>
    );
  }
}
