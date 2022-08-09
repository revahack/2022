import React, { useEffect } from "react";
import "./landing.css";
import Typewriter from "typewriter-effect";
import ParticleBackground from "../../particleBackground"
import Aos from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
    <div id="hero" className="landing-main">
      <div data-aos="fade-up" className="hvr-shutter-in-vertical name">REVA Hack</div>
      <div data-aos="fade-up" className="name-2">
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
    <ParticleBackground/>
    </div>
      </>
  );
}


export default Landing
