import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Login(){
    return(
        <>
        <Container fluid className='container5'>
            <Row className='login'>
                <Row><h1>Login</h1></Row>
                <Col xl={3}></Col>
                <Col xl={6}>
                <div className="login1">
                <form>
                    <input type='email' id='email' name='email' placeholder='Email'></input>
                    <input type='password' id='password' name='password' placeholder='Password'></input>
                    <button>Login</button>
                    <p>If ypu don't have account<Link to='/SignupPage'><h2>Signup</h2></Link></p>
                </form>
                </div>
                </Col>
                <Col xl={3}></Col>
            </Row>
        </Container>
       
        </>
    );
}
export default Login;