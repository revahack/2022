import React, { Component } from "react";
import "./landing.css";
import Typewriter from "typewriter-effect";

export default class Landing extends Component {
  render() {
    return (
      <>
        <div className='landing-main'>
          <div className='hvr-shutter-in-vertical name'>REVA Hack</div>
          <div className='hvr-shutter-in-vertical name-2'>
            <Typewriter
              options={{
                strings: ["Coming Soon..", "Get Ready.."],
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
