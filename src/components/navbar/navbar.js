import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/RH_logo/rh-logo-blue-trans.png";
// import logo from "../../images/RH_logo_sq2.svg"
import "./navbar.css";

export default function BootNavbar() {
  return (
    <Navbar sticky="top" className="navbar" expand="lg">
      <Container>
        <a
          id="mlh-trust-badge"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=gray"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-gray.svg"
            alt="Major League Hacking 2023 Hackathon Season"
            style={{ width: "100%" }}
          />
        </a>
        <Navbar.Brand href="#">
          {/* <h2 className="navtitle">REVA Hack</h2> */}
          <img
            className="navtitle"
            height="70px"
            width="70px"
            src={logo}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle
          bg="light"
          aria-controls="basic-navbar-nav"
        ></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav light">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link href="#about">
              <span className="navlinks">ABOUT</span>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#tracks">
              <span className="navlinks">TRACKS</span>
            </Nav.Link>
            <Nav.Link eventKey={3} href="#prizes">
              <span className="navlinks">PRIZES</span>
            </Nav.Link>
            <Nav.Link eventKey={4} href="#timeline">
              <span className="navlinks">TIMELINE</span>
            </Nav.Link>
            <Nav.Link eventKey={5} href="#sponsors">
              <span className="navlinks">SPONSORS</span>
            </Nav.Link>
            <Nav.Link eventKey={6} href="#faq">
              <span className="navlinks">FAQ</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
