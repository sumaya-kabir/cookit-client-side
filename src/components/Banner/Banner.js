import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import food_1 from '../../assets/images/pexels-antony-trivet-14164923.jpg';
import food_2 from '../../assets/images/pexels-foodie-factor-566566.jpg';
import food_3 from '../../assets/images/pexels-sydney-troxell-718742.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner px-5 py-5'>
            <Container>
                <Row>
                    <Col className='mt-5 pt-5'>
                        <h1 className='pt-5 pb-3'>The Art Of <br/> Cooking</h1>
                        <button className='btn btn-dark'>Book a Class</button>
                    </Col>
                    <Col className='d-none d-sm-block d-md-block fancy'>
                        <img className='w-50 mx-5' src={food_1} alt="" />
                        <img className='w-75' src={food_3} alt="" />
                        <img className='w-50 mx-5' src={food_2} alt="" />
                    </Col>
                </Row>
            </Container>

            </div>
    );
};

export default Banner;