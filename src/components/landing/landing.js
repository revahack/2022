import React, { Component } from "react";
import "./landing.css";
import Typewriter from "typewriter-effect";
import ParticleBackground from "./particleBackground";

export default class Landing extends Component {
  render() {
    return (
      <>
        <div className='landing-main'>
          <ParticleBackground />
          <div className='hvr-shutter-in-vertical name'>REVA Hack</div>
          <div className='name-2'>
            <Typewriter
              options={{
                strings: ["Coming Soon..", "The Hack Is Back.."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          {/* After Coming soon gets over */}
          {/* <div className='main-buttons'>
          <button>Button 1</button>
          <button>Button 2</button>
        </div> */}
        </div>
      </>
    );
  }
}
