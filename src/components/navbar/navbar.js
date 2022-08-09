import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

export default function BootNavbar() {
  return (
    <Navbar sticky="top" className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="navtitle">REVA Hack</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link href="#deets">
              <span className="navlinks">ABOUT</span>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/">
              <span className="navlinks">TRACKS</span>
            </Nav.Link>
            <Nav.Link eventKey={3} href="/">
              <span className="navlinks">PRIZES</span>
            </Nav.Link>
            <Nav.Link eventKey={4} href="/">
              <span className="navlinks">SPONSORS</span>
            </Nav.Link>
            <Nav.Link eventKey={5} href="/">
              <span className="navlinks">FAQ</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
