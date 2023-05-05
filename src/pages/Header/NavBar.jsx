import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import ProPhoto from '../../assets/react.svg'
import { AuthContext } from '../../AuthProvider';
import './NavBar.css';

const NavBar = () => {
  const {user,logOut} = useContext(AuthContext) ;

  const handleLogOut =()=>{
    logOut()
      .then()
      .catch(error => console.log(error))
  }
  return (
    <Container className='h-25'>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className='fw-bolder text-warning' href="#home"><h1>Tabbakh</h1></Navbar.Brand>


          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className='active' to='/'>Home</NavLink>
              <Link className='navlink' to='/blog'>Blogs</Link>
              

            </Nav>
            <Nav className='flex align-items-center'>
             

              
              { user?
                  <div>
                     <Image className='me-4' src={ProPhoto} roundedCircle />
                    <Link onClick={handleLogOut}><Button variant="warning">LogOut</Button></Link>
                  </div>:
                  <Link to="/login"><Button variant="warning">Login</Button></Link>
              }
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavBar;