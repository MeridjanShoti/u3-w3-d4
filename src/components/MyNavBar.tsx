import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router";
const MyNavBar = () => {
  const location = useLocation();
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/" className="navbar-brand">
            React-Bootstrap
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className={location.pathname === "/" ? "nav-link nav-link-active fw-bold" : "nav-link"}>
                Home
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavBar;
