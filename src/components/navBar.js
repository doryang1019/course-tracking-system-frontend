import { SITENAME } from '../constants';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../navbar.css';

const NavBar = () => {
    
    return(
    <Navbar data-bs-theme="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">{ SITENAME }</Navbar.Brand>
        <Nav>
            <Nav.Link className="custom-nav-link d-inline-block" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="custom-nav-link d-inline-block" as={Link} to="/search">Course</Nav.Link>
            <Nav.Link className="custom-nav-link d-inline-block" as={Link} to="/about">About Us</Nav.Link>
            <Button variant="warning" as={Link} to="/login">Login</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;