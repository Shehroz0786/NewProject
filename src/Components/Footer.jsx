import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../Images/Logo.png';
import {FaPhoneAlt } from 'react-icons/fa';
import {TfiEmail } from 'react-icons/tfi';
import {AiFillFacebook } from 'react-icons/ai';
import {AiFillTwitterSquare } from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Footer(){
    return(
        <>
    <Container fluid className='container1'>
      <Row >
        <Col className='col'>
            <Link to='/'><img src={Logo} alt='logo'></img></Link>
            <p>What makes our world and life experience unique is its ability to be so unpredictable. Unpredictability isn’t good</p>
        <h5><spam><FaPhoneAlt/></spam>0310-7509752</h5>
        <p><spam><TfiEmail/></spam>shehrozamjid71@gamil.com</p>
        <div className="icon">
        <h1><spam className='fb'><AiFillFacebook /></spam><spam className='twe'><AiFillTwitterSquare/></spam><spam className='insta'><BsInstagram/></spam></h1>
        </div>
        </Col>
        <Col className='col1'>
        <h2>QUICK LINKS</h2>
        <ul>
           <Link to='/Homepage'> <p>Home</p></Link>
           <Link to='/AboutUs'> <p>About Us</p></Link>
           <Link to='/Contact'> <p>Contact Us</p></Link>
           <Link to='/Loginpage'> <p>Login</p></Link>
        </ul>
        </Col>
        <Col className='col2'>
            <h2>Contact Us</h2>
            <input type='email' placeholder='Your Email Adress'></input><br></br>
            <textarea type='text' rows='5' cols='23' placeholder='Message...'></textarea>
           <Row> <button>Submit</button></Row>
        </Col>
      </Row>
      <Row className='row1'>
        <p>Copyright © 1996–2023 Booking.com™. All rights reserved.</p>
      </Row>
    </Container>   
        </>
    );
}
export default Footer;