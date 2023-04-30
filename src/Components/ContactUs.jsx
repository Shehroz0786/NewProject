import './ContactUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Animation from '../Images/Animation.gif';
import {AiFillFacebook } from 'react-icons/ai';
import {AiFillTwitterSquare } from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {FaPhoneAlt } from 'react-icons/fa';
import {TfiEmail } from 'react-icons/tfi';

function ContactUs(){
    return(
        <>
        <Container fluid className='container4'>
            <Row>
                <Row><h1>Contact Us</h1></Row>
                <Col xl={6} className='form'>
                    <form>
                        <div className="form">
                        <input type='text' id='fname' name='fname' placeholder='First Name'></input>
                        <input type='text' id='lname' name='lname' placeholder='Last Name'></input>
                        <input type='email' id='email' name='email' placeholder='Email'></input>
                        <input type='password' id='password' name='password' placeholder='Password'></input>
                        <input type='password' id='password' name='password' placeholder='Confirm Password'></input>
                        <textarea placeholder='Message...' rows={5} cols={10}></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </Col>
                <Col xl={6} className='animation'>
                 <img src={Animation}></img>
                </Col>
                <Row>
                <Col xl={6} className='contactIcon'>
            <h1><spam className='fb'><AiFillFacebook /></spam><spam className='twe'><AiFillTwitterSquare/></spam><spam className='insta'><BsInstagram/></spam></h1>
            </Col>
            <Col xl={6} className='contactInfo'>
            <h5><spam><FaPhoneAlt/></spam>0310-7509752</h5>
            <h6><spam><TfiEmail/></spam>shehrozamjid71@gamil.com</h6>
            </Col>
            </Row>
            </Row>
           
        </Container>
        </>
    );
}
export default ContactUs;