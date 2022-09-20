import React from "react";
import Container from "react-bootstrap/Container";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
        <div class="site-section">
          <Container>
            <div class="d-flex px-5 justify-content-between align-items-center">
              <div class="col-sm">
                <ul class="list-unstyled links">
                  <li><a href="#about" class="footer-link">ABOUT</a></li>
                  <li><a href="#tracks" class="footer-link">TRACKS</a></li>
                  <li><a href="#prizes" class="footer-link">PRIZES</a></li>
                  <li><a href="#sponsors" class="footer-link">SPONSORS</a></li>
                  <li><a href="#faq" class="footer-link">FAQ</a></li>
                </ul>
              </div>
              <div class="col-md-3 contact">
                <h1>CONTACT US</h1>
                <ul class="list-unstyled contact-items">
                  {/* <li><h2>+91 8127982371</h2></li> */}
                  <li><h2><a href="mailto:info.revahack@gmail.com" target="_blank" rel="noopener noreferrer">info.revahack@gmail.com</a></h2></li>
                  
                  {/* <li><h2>info.revahack@gmail.com</h2></li> */}
                  {/* <li><h2>contact@reva.com</h2></li> */}
                </ul>
              </div>
            </div>
            <div className="copy">
              <p class="copyright">
                  <h6>Copyright REVA Hack &#169;2022</h6>
                  {/* <h6 style={{ margin:"0" }}>Made with &#x2665; by Tech Team</h6> */}
              </p>
            </div>
          </Container>
        </div>
    </div>
  );
}
