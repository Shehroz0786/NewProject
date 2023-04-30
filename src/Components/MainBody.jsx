import './MainBody.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function MainBody() {
    return (
        <>
        <Container className="container">
            <Row xl={8} xs={10}>
            <div className="body1"><p>What makes our world and life experience unique is its ability to be so unpredictable. Unpredictability isn’t good; when it’s terrible, you better be prepared to deal with it. That is where the role of First aid comes in. We never know what we might have to face when we might have saved someone’s life. So we must prepare ourselves and everyone around us for such unfortunate situations.</p></div>
           <Link to='/Loginpage'><div className="login0"><button><h1>LOGIN</h1></button></div></Link>
            </Row>
            </Container>  
        </>
    );
}
export default MainBody;