import React, { Component } from "react";
import "./tracks.css";

import Container from "react-bootstrap/Container"; 

import bg from "../../images/tracks_bg.png"

export default class Tracks extends Component {
  render() {
    return (
      <div id="tracks" className="track-main">
        <Container>
        <div className='track-heading-div'>
          <h1 className='track-heading'>TRACKS</h1>
          <img className='track-img' src={bg} width={"100%"} alt='' />
        </div>
        </Container>
        
        <div className="track-container" >
          <div className="track-card">
              <h3>Artificial Intelligence</h3>
              <hr />
              <p className="track-para" >AI track is essentially a gathering of forward-thinking data scientists and developers to
                utilize artificial intelligence and tackle real-world challenges. This hackathon evaluates a
                candidate's ability to make quick decisions and to add value in the lowest amount of
                time.
                </p>
            </div>
          <div className="track-card">
              <h3>Block Chain</h3>
              <hr />
              <p className="track-para" >In the Blockchain track, candidates will provide decentralized, distributed, and public
                  digital ledger solutions that power cryptocurrencies and NFTs of the world. To solve
                  problems that can not be overcome by conventional approaches.
                </p>
            </div>
          <div className="track-card">
              <h3>Open Innovation</h3>
              <hr />
              <p className="track-para" >This track provides for unlimited innovation and scope, as the name would imply. It's
                  designed for those who might be new to the developer mindset, or who might have a
                  brilliant new idea in mind and want to expand on it.
                </p>
            </div>
          </div>
      </div>
    );
  }
}
