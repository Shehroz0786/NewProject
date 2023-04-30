import './Signup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiFillFacebook } from 'react-icons/ai';
import {AiFillTwitterSquare } from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Signup(){
    return(
        <>
          <Container fluid className='container6'>
            <Row className='signup1'>
                <Row><h1>Signup</h1></Row>
                <Col xl={3}></Col>
                <Col xl={6}>
                <div className="signup">
                <form>
                <input type='text' id='fname' name='fname' placeholder='First Name'></input>
                <input type='text' id='lname' name='lname' placeholder='Last Name'></input>
                    <input type='email' id='email' name='email' placeholder='Email'></input>
                    <input type='password' id='password' name='password' placeholder='Password'></input>
                    <input type='password' id='password' name='password' placeholder='Confirm Password'></input>
                    <button>Signup</button>
                    <h1><spam className='fb'><AiFillFacebook /></spam><spam className='twe'><AiFillTwitterSquare/></spam><spam className='insta'><BsInstagram/></spam></h1>
                    <p>If you have already an account!<Link to='/Loginpage'><h2>Login</h2></Link></p>
                    
                </form>
                </div>
                </Col>
                <Col xl={3}></Col>
            </Row>
        </Container>
        </>
    );
}
export default Signup;