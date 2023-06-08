import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
    >
      <Container>
        <Link
          to='/'
          className='navbar-brand'
        >
          Library Management Systems
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link
              className='nav-link'
              to='/'
            >
              Home
            </Link>
            <Link
              className='nav-link'
              to='/login'
            >
              Login
            </Link>
            <Link
              className='nav-link'
              to='/signup'
            >
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
