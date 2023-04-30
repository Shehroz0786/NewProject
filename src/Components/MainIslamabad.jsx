
import React from "react";
import Islamabad from "./Islamabad";
import "../Components/Islamabad.css";
import { useState } from "react";
import IsalamabadData from "./IslamabadData";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillPlusCircle } from "react-icons/ai";
import { BsDashCircle } from "react-icons/bs";
function MainIslamabad(){
    const [data, setData] = useState(IsalamabadData);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [num, setNum] = useState('');
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const inc = () => {
        if (value < 30) {
            setValue(value + 1);
        } else {
            setValue(30)
        }
    }

    const dec = () => {
        if (value < 1) {
            setValue(0);
        } else {
            setValue(value - 1)
        }
    }
    const inc1 = () => {
        if (value1 < 10) {
            setValue1(value1 + 1);
        } else {
            setValue1(10)
        }
    }

    const dec1 = () => {
        if (value1 < 1) {
            setValue1(0);
        } else {
            setValue1(value1 - 1)
        }
    }

    const inc2 = () => {
        if (value2 < 30) {
            setValue2(value2 + 1);
        } else {
            setValue2(30)
        }
    }

    const dec2 = () => {
        if (value2 < 1) {
            setValue2(0);
        } else {
            setValue2(value2 - 1)
        }
    }
    const apply = () => {
        setNum(value);
        setNum1(value1);
        setNum2(value2);
    }
    return(
    <>
     <Container fluid className='container7'>
                <Row>
                    <Col xl={4} xs={12}>
                    <div className='search'>
                        <Row className='isl'>
                            <Row className='col11'><h5>Find your next stay</h5></Row>
                            <Col  >
                                <select name='city' id='city' className='flag11'>
                                    <option>Where are you going?</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Isalamabad">Isalamabad</option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Murree">Murree</option>
                                    <option value="Nathia Gali">Nathia Gali</option>
                                </select>
                            </Col>
                            <Col >
                                <input type='datetime-local' className='flag22'></input>
                            </Col>
                            <Col className='flag33'>
                                <button onClick={handleShow}>{num} adult.{num1} children.{num2} room</button>
                                <Modal show={show} onHide={handleClose} className='flag'>
                                    <h4>Adult</h4>
                                    <div className="adult">
                                        <div className="cnn1 me-3" ><BsDashCircle onClick={dec} /></div>
                                        <div className="cnn2">{value}</div>
                                        <div className="cnn3 ms-3" ><AiFillPlusCircle onClick={inc} /></div>
                                    </div>
                                    <h4>Children</h4>
                                    <div className="children">
                                        <div className="cnn4 me-3" ><BsDashCircle onClick={dec1} /></div>
                                        <div className="cnn5">{value1}</div>
                                        <div className="cnn6 ms-3" ><AiFillPlusCircle onClick={inc1} /></div>
                                    </div>
                                    <h4>Room</h4>
                                    <div className="room">
                                        <div className="cnn7 me-3" ><BsDashCircle onClick={dec2} /></div>
                                        <div className="cnn8">{value2}</div>
                                        <div className="cnn9 ms-3" ><AiFillPlusCircle onClick={inc2} /></div>
                                    </div>
                                    <Button variant="primary" onClick={apply} className='c00'>
                                        Apply
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose} className='c01 mt-5'>
                                        Close
                                    </Button>
                                </Modal>
                            </Col>
                            <Col className='flag44'>
                                <button>Search</button>
                            </Col>
                        </Row>
                        </div>
                        <Row className="aa">
                            <Col xs={10}>
                                <h6>Start rating</h6>
                                <div className="check">
                                    <input type='checkbox' name='one star'></input>
                                    <label for='one star'>One Star</label><br />
                                    <input type='checkbox' name='two star'></input>
                                    <label for='two star'>Two Star</label><br />
                                    <input type='checkbox' name='three star'></input>
                                    <label for='three star'>Three Star</label><br />
                                    <input type='checkbox' name='four star'></input>
                                    <label for='four star'>Four Star</label><br />
                                    <input type='checkbox' name='five star'></input>
                                    <label for='five star'>Five Star</label><br />
                                </div>
                            </Col>
                        </Row>

                        <Row className="aa">
                            <Col>
                                <h6>Distance from centre of Islamabad</h6>
                                <div className="check">
                                    <input type='checkbox' name='less the 1Km'></input>
                                    <label for='less the 1Km'>Less the 1Km</label><br />
                                    <input type='checkbox' name='less the 3Km'></input>
                                    <label for='less the 3Km'>Less the 3Km</label><br />
                                    <input type='checkbox' name='less the 5Km'></input>
                                    <label for='less the 5Km'>Less the 5Km</label><br />
                                </div>
                            </Col>
                        </Row>

                        <Row className="aa">
                            <Col >
                                <h6>Neighbourhood</h6>
                                <div className="check">
                                    <input type='checkbox' name='E-11 Sector'></input>
                                    <label for='E-11 Sector'>E-11 Sector</label><br />
                                    <input type='checkbox' name='G-9 Sector'></input>
                                    <label for='G-9 Sector'>G-9 Sector</label><br />
                                    <input type='checkbox' name='F-8 Sector'></input>
                                    <label for='F-8 Sector'>F-8 Sector</label><br />
                                    <input type='checkbox' name='F-7 Sector'></input>
                                    <label for='F-7 Sector'>F-7 Sector</label><br />
                                    <input type='checkbox' name='Blue Area'></input>
                                    <label for='Blue Area'>Blue Area</label><br />
                                    <input type='checkbox' name='F-6 Sector'></input>
                                    <label for='F-6 Sector'>F-6 Sector</label><br />
                                    <input type='checkbox' name='G-6 Sector'></input>
                                    <label for='G-6 Sector'>G-6 Sector</label><br />
                                    <input type='checkbox' name='G-8 Sector'></input>
                                    <label for='G-8 Sector'>G-8 Sector</label><br />
                                </div>
                            </Col>
                        </Row>
                        </Col>
                       
            <Col xl={7}>
        <Row className="h3">
        <h3>Islamabad: 341 properties found</h3>
        </Row>
           {data.map((val) => {
       return(
                       
        <Islamabad
        h5={val.h5}
        p={val.p}
        p1={val.p1}
        h6={val.h6}
        btn={val.btn}
        p2={val.p2}
        btn1={val.btn1}
      />
       )
      })}
      </Col>
           </Row>

</Container>
    </>
    );
}

export default MainIslamabad;