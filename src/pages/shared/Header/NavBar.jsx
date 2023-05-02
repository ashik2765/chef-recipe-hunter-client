import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Container>

            <Navbar collapseOnSelect expand="lg" bg="bs-warning-bg-subtle" variant="light">
      <Container>
      <Navbar.Brand className='fw-bolder' href="#home">Tabbakh</Navbar.Brand>

        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='text-primary' to='/'>Home</Nav.Link>
            <Nav.Link href="#about">Blog</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            
          </Nav>
          <Nav className='flex align-items-center'>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavBar;