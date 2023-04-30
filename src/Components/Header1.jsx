
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../Images/Logo.png';
import './Header.css';

function Header1() {
  return (
    <Navbar className='main' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><div className="logo"><Link to='/'><img src={Logo} alt='Logo'></img></Link></div></Navbar.Brand>
      </Container>
    </Navbar>
    
  );
}

export default Header1;