import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shehroz from '../Images/shehroz.jpg';
function About() {
    return (
        <>
            <Container fluid className='container3'>
                <Row><h1>About Us</h1></Row>
                <Row><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></Row>
                <Row className='about'>
                    <Col xl={6} className='about1'>
                        <h2>Behind the success</h2>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum in quod voluptatibus sapiente neque hic eaque vel libero ipsam ea, reprehenderit, molestiae, temporibus voluptates. Deserunt excepturi laudantium magni necessitatibus.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum in quod voluptatibus sapiente neque hic eaque vel libero ipsam ea, reprehenderit, molestiae, temporibus voluptates. Deserunt excepturi laudantium magni necessitatibus.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum in quod voluptatibus sapiente neque hic eaque vel libero ipsam ea, reprehenderit, molestiae, temporibus voluptates. Deserunt excepturi laudantium magni necessitatibus.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum in quod voluptatibus sapiente neque hic eaque vel libero ipsam ea, reprehenderit, molestiae, temporibus voluptates. Deserunt excepturi laudantium magni necessitatibus.lorem</p>
                    </Col>
                    <Col xl={6}  className='about2'>
                            <h2>Desiner</h2>
                            <h5>Shehroz Amjad</h5>
                            <img src={shehroz}></img>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default About;