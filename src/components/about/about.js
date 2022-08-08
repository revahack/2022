import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./about.css";
export default class About extends Component {
  render() {
    return (
      <div className='about-main'>
        <Container>
          <div className='about-heading'>
            <h1 className='heading'>ABOUT US</h1>
            <img className='line' src='/about_bg.png' width={"100%"} alt='' />
          </div>
            <Container>
          <div className='paragraph'>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit esse odit asperiores, necessitatibus eos molestias
                ipsam sunt enim! Sint facilis accusamus officiis architecto sit
                ea rerum quibusdam impedit, cumque officia ratione similique
                consectetur cum soluta, quasi nihil. Perspiciatis fugit sit
                iusto magni obcaecati velit maxime et facilis odit, voluptas
                necessitatibus?
                <br /><br />
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Adipisci, deleniti voluptates, ea quam
                veritatis molestias quae debitis reiciendis dolores odit, unde
                quo sit nesciunt voluptate exercitationem asperiores possimus
                quas dolorum.
              </h5>
          </div>
            </Container>
        </Container>
      </div>
    );
  }
}
