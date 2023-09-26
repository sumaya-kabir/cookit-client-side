import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CookingPhilo.css';
import pic1 from "../../assets/images/pexels-any-lane-5945565.jpg";
import pic2 from "../../assets/images/pexels-pixabay-357627.jpg";

const CookingPhilo = () => {
    return (
        <div className='mx-5'>
            <Container className='p-5 m-3'>
                <Row>
                    <Col>
                    <div className='mt-5'>
                    <h2>Everything From Scratch</h2>
                        <p>
                            Art party meggings subway tile, selfies helvetica tofu before they sold out slow-carb chillwave humblebrag vape heirloom meh shaman. Everyday carry af before they sold out VHS whatever. Keffiyeh taiyaki crucifix gentrify.
                        </p>
                        <button className='btn btn-dark'>Cooking Philosophy</button>
                    </div>
                    </Col>
                    <Col>
                        <div className='d-flex'>
                            <img className='w-50' src={pic1} alt="" />
                            <img className='w-50' src={pic2} alt="" />
                        </div>
                        <div className='d-flex'>
                            <div className='w-50'>
                                <p className='Circle text-decoration-underline fw-bold'>Sign Up</p>
                            </div>
                            <div className='w-50 px-3 py-5 bg-success text-light'>
                                <h3>
                                    We start every class with a trip to the local market
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis labore odit amet, iusto vero!
                                </p>
                                <button className='btn btn-dark'>Cindi Market</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CookingPhilo;