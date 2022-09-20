import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./sponsors.css";

export default class Sponsors extends Component {
  render() {
    return (
      <div
        id="about"
        className="about-main d-flex align-items-center justify-content-center"
      >
        <Container>
          <div data-aos="slide-up" className="about-heading">
            <h1 className="heading">SPONSORS</h1>
            <img className="line" src="/about_bg.png" width={"100%"} alt="" />
          </div>
          <Container></Container>
        </Container>
      </div>
    );
  }
}
