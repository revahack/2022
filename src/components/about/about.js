import React from "react";
import Container from "react-bootstrap/Container";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="about" className='about-main d-flex align-items-center justify-content-center'>
      <Container>
        <div data-aos="slide-up" className='about-heading'>
          <h1 className='heading'>ABOUT US</h1>
          <img className='line' src='/about_bg.png' width={"100%"} alt='' />
        </div>
        <Container>
          <div className='paragraph'>
            <h5 data-aos="slide-up">
              REVA HACK is an annual tech and innovation fest organized by The
              Hackathon Club at REVA University, the yearly event has only seen
              growth year over year since its inception in 2017. Once started as
              a university-wide event, REVA Hack now sees participants from all
              over the world showcasing their creativity and displaying their
              drive to innovate.
            </h5><br />
            <h5 data-aos="slide-up">
              Today REVA HACK has become our University's flagship technological
              event that welcomes over a thousand participants every year.
              Despite the pandemic over the last few years, REVA Hack has
              managed to adapt to the new norm by embracing the virtual
              hackathon model. This move in turn helped us expand our reach and
              welcome more participants in the past few years.
            </h5><br />
            <h5 data-aos="slide-up">
              REVA Hack 2021 was a landmark event for the club with over 2000
              registered entrants and prices over INR 1 Cr. Reva Hack's schedule
              also accommodates pre-event workshops, learnathons, and
              semi-formal engagement events like Kahoots, stressbusters, etc.
              that come with goodies. Our mission at The Hackathon Club is to
              fuel your innovation and REVA Hack is our way of doing just that.
            </h5><br />
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default About;
