import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../Images/Logo.png';
import './Header.css';

function Header() {
  return (
    <Navbar className='main' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><div className="logo"><Link to='/'><img src={Logo} alt='Logo'></img></Link></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link >
              <Link className='mx-3 text-light' to='/Homepage'>Home</Link>
            </Nav.Link>
            <Nav.Link >
              <Link className='mx-3 text-light' to='/AboutUs'>About Us</Link>
            </Nav.Link>
            <Nav.Link >
              <Link className='mx-3 text-light' to='/Contact'>Contact US</Link>
            </Nav.Link>
            <Nav.Link >
              <Link className='mx-3 text-light' to='/LoginPage'>Login</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;