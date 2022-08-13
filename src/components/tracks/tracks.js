import React ,{ useEffect } from "react";
import "./tracks.css";

import Container from "react-bootstrap/Container";
import Aos from "aos";
import "aos/dist/aos.css";

import bg from "../../images/tracks_bg.png";
import aiicon from "../../images/ai_icon.svg";
import blicon from "../../images/blockchain_icon.svg";

const Tracks = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="tracks" className="track-main">
      <Container>
        <div data-aos="slide-up" className="track-heading-div">
          <h1 className="track-heading">TRACKS</h1>
          <img className="track-img" src={bg} width={"100%"} alt="" />
        </div>
      </Container>
      <Container className="track-card-container">
        <div data-aos="slide-up" className="track-container">
          <div className="track-card">
            <div className="card-front">
              <img className="card-front-image" src={aiicon} alt="" />
            </div>
            <div className="card-back">
              <h3>Artificial Intelligence</h3>
              <hr />
              <p className="track-para">
                AI track is essentially a gathering of forward-thinking data
                scientists and developers to utilize artificial intelligence and
                tackle real-world challenges. This hackathon evaluates a
                candidate's ability to make quick decisions and to add value in
                the lowest amount of time.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="slide-up" className="track-container">
          <div className="track-card">
            <div className="card-front">
              <img className="card-front-image" src={blicon} alt="" />
            </div>
            <div className="card-back">
              <h3>Block Chain</h3>
              <hr />
              <p className="track-para">
                In the Blockchain track, candidates will provide decentralized,
                distributed, and public digital ledger solutions that power
                cryptocurrencies and NFTs of the world. To solve problems that
                can not be overcome by conventional approaches.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tracks;
