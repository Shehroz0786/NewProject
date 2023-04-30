import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillPlusCircle } from "react-icons/ai";
import { BsDashCircle } from "react-icons/bs";
import islamabad from '../Images/islamabad.jpg';
import karachi from '../Images/karachi.jpg';
import lahore from '../Images/lahore.jpg';
import multan from '../Images/multan.jpg';
import faisalabad from '../Images/faisalabad.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
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

  return (
    <>
      <Container fluid className='container2'>
        <Row>
          <Col className='col1' xl={5}><h1>Find your next stay</h1> <h6>Search low prices on hotels, homes and much more...</h6></Col>
        </Row>
        <Row className='row2'>
          <Col xl={3} >
            <select name='city' id='city' className='flag1'>
              <option>Where are you going?</option>
              <option value="Lahore">Lahore</option>
              <option value="Isalamabad">Isalamabad</option>
              <option value="Karachi">Karachi</option>
              <option value="Murree">Murree</option>
              <option value="Nathia Gali">Nathia Gali</option>
            </select>
          </Col>
          <Col xl={3}>
            <input type='datetime-local' className='flag2'></input>
          </Col>
          <Col xl={4} className='flag3'>
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
          <Col xl={1} className='flag4'>
            <button>Search</button>
          </Col>
        </Row>
        <Row ><Col className='colh' xl={3}><h1>Top Citys</h1></Col></Row>
        <Row className='main1'>
          <Row className='row3'>
            <Col xl={6} className='pic'>
             <Link to='/IslamabadPage'><img src={islamabad}></img></Link> 
            </Col>
            <Col xl={6} className='pic1'>
             <Link to='/KarachiPage'><img src={karachi}></img></Link> 
            </Col>
          </Row>
          <Row className='row4'>
            <Col xl={4} className='pic2'>
             <Link to='/LahorePage'><img src={lahore}></img></Link> 
            </Col>
            <Col xl={4} className='pic3'>
              <Link to='/MultanPage'><img src={multan}></img></Link>
            </Col>
            <Col xl={4} className='pic4'>
             <Link to='/FaisalabadPage'> <img src={faisalabad}></img></Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}
export default Home;