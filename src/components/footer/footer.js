import React from "react";
import Container from "react-bootstrap/Container";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
        <div class="site-section">
          <Container>
            <div class="row">
              <div class="col-sm">
                <ul class="list-unstyled links">
                  <li><a href="#about" class="footer-link">ABOUT</a></li>
                  <li><a href="#tracks" class="footer-link">TRACKS</a></li>
                  <li><a href="#prizes" class="footer-link">PRIZES</a></li>
                  <li><a href="#sponsors" class="footer-link">SPONSORS</a></li>
                  <li><a href="#faq" class="footer-link">FAQ</a></li>
                </ul>
              </div>
              <div class="col-md-3">
                <h1>Contact Us</h1>
                <ul class="list-unstyled contact">
                  <li><h2>+91 8127982371</h2></li>
                  <li><h2>contact@reva.com</h2></li>
                  <li><h2>contact@reva.com</h2></li>
                </ul>
              </div>
              <p class="copyright">
                  <h6>copyright REVA Hack &copy;2022</h6>
              </p>
            </div>
          </Container>
        </div>
    </div>
  );
}
