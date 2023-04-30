
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic from '../Images/pic.jpg';
import { AiFillStar } from 'react-icons/ai';
function Multan(props) {
   
    return (
        <>
                    <Col xl={12} xs={10}>
                        
                        <Row className='ticket0'>
                            <Col className='ticket' xl={4}>
                            <img src={pic}></img>
                            </Col>
                            <Col xl={5} className='star0'>
                                <div className="star">
                                <h5>{props.h5}<span><AiFillStar/><AiFillStar/><AiFillStar/></span></h5>
                                </div>
                                <p>{props.p}</p>
                                <p>{props.p1}</p>
                            </Col>
                            <Col xl={3} className='last'>
                                <div className="ss">
                                <h6>{props.h6}</h6>
                                <button>{props.btn}</button>
                                </div>
                                <p>{props.p2}</p>
                                <button>{props.btn1}</button>
                            </Col>
                        </Row>

                    </Col>
        </>
    );
}
export default Multan;