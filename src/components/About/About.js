import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import glass from '../../assets/images/pexels-anthony-📷📹🙂-132432.jpg';

const About = () => {
    return (
        <div>
            <Container className='p-5 m-3'>
                <Row>
                    <Col className='col-12 col-sm-6'>
                    <div className='mt-5'>
                    <h2>About Us</h2>
                        <p>
                            Art party meggings subway tile, selfies helvetica tofu before they sold out slow-carb chillwave humblebrag vape heirloom meh shaman. Everyday carry af before they sold out VHS whatever. Keffiyeh taiyaki crucifix gentrify.Art party meggings subway tile, selfies helvetica tofu before they sold out slow-carb chillwave humblebrag vape heirloom meh shaman. Everyday carry af before they sold out VHS whatever. Keffiyeh taiyaki crucifix gentrify.Art party meggings subway tile, selfies helvetica tofu before they sold out slow-carb chillwave humblebrag vape heirloom meh shaman. Everyday carry af before they sold out VHS whatever. Keffiyeh taiyaki crucifix gentrify.
                        </p>
                        <button className='btn btn-dark'>Learn More</button>
                    </div>
                    </Col>
                    <Col className='mt-5 pt-5 col-12 col-sm-6'>
                        <img className='w-100 mt-5 pt-5 ml-3' src={glass} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;