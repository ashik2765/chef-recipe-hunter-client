import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProPhoto from '../../assets/react.svg'

const NavBar = () => {
  return (
    <Container className='h-25'>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className='fw-bolder' href="#home"><h1>Tabbakh</h1></Navbar.Brand>


          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className='text-primary' to='/'>Home</Nav.Link>
              <Nav.Link href="#about">Blog</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>

            </Nav>
            <Nav className='flex align-items-center'>
              <Image className='me-4' src={ProPhoto} roundedCircle />

              <Link to="/login"><Button variant="secondary">Login</Button></Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavBar;