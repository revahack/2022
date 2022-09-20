import React, { Component } from "react";
import "./timeline.css";
import Container from "react-bootstrap/Container";
import bg from "../../images/tracks_bg.png";


export default class TimeLine extends Component {
  render() {
    return (
      <div id="timeline" className="timeline-main d-flex align-items-center justify-content-center">
        <Container>
        <div data-aos="slide-up" className="track-heading-div">
          <h1 className="track-heading">TIMELINE</h1>
          <img className="track-img" src={bg} width={"100%"} alt="" />
        </div>
        <Container>
        <div data-aos="fade-up" id="timeline2" class="timeline">
          <div class="timeline__event timeline__event--type1">
            <div class="timeline__event__icon ">
              <i class="lni lni-cake"></i>
            </div>
            <div class="timeline__event__date">20-08-2019</div>
            <div class="timeline__event__content ">
              <div class="timeline__event__title">Lorem Ipsum</div>
              <div class="timeline__event__description">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
          </div>
          <div class="timeline__event timeline__event--type2">
            <div class="timeline__event__icon">
              <i class="lni lni-burger"></i>
            </div>
            <div class="timeline__event__date">20-08-2019</div>
            <div class="timeline__event__content">
              <div class="timeline__event__title">Lorem Ipsum</div>
              <div class="timeline__event__description">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
          </div>
          <div class="timeline__event timeline__event--type3">
            <div class="timeline__event__icon">
              <i class="lni lni-slim"></i>
            </div>
            <div class="timeline__event__date">20-08-2019</div>
            <div class="timeline__event__content">
              <div class="timeline__event__title">Lorem Ipsum</div>
              <div class="timeline__event__description">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
          </div>
          <div class="timeline__event timeline__event--type1">
            <div class="timeline__event__icon">
              <i class="lni lni-cake"></i>
            </div>
            <div class="timeline__event__date">20-08-2019</div>
            <div class="timeline__event__content">
              <div class="timeline__event__title">Lorem Ipsum</div>
              <div class="timeline__event__description">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
          </div>
        </div>
        </Container>
        </Container>
              </div>
    );
  }
}
