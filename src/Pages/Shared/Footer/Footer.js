import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Footer.css';


const Footer = () => {
    return (
        <Container className='d-flex mb-5'>
            <Row>
                <Col className='text-center'>
                    <div className='d-flex'>
                        <div className='footer-box'>
                            <h6>ADDRESS</h6>
                            <p>1234 Cindi St. #3000 Edmonton, Alberta</p>
                        </div>
                        <div style={{ backgroundColor: 'rgb(177, 231, 177)' }} className='footer-box'>
                            <h6>PHONE</h6>
                            <p>(222) 354-7362</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className=''>
                            <div className="follow-circle">
                                <h6>FOLLOW</h6>
                                <p></p>
                            </div>
                        </div>
                        <div className='footer-box bg-success text-light'>
                            <h6>EMAIL</h6>
                            <p>cookitofficial@gmail.com</p>
                        </div>
                    </div>
                </Col>
                <Col className='ms-5 mt-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control className='input' type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Emails</Form.Label>
                            <Form.Control className='input' type="email" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control className='input' as="textarea" rows={3} />
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;