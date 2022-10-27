import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../Slider/Slider';
import cooking from '../../assets/images/cooking.jpg';

const Home = () => {
    return (
        <div className='w-100 mx-auto'>
            <Slider></Slider>

            <Container className='p-5 m-3'>
                <Row>
                    <Col>
                    <div className='mt-5'>
                    <h2>What will you learn to cook:</h2>
                        <p>
                            Art party meggings subway tile, selfies helvetica tofu before they sold out slow-carb chillwave humblebrag vape heirloom meh shaman. Everyday carry af before they sold out VHS whatever. Keffiyeh taiyaki crucifix gentrify.
                        </p>
                    </div>
                    </Col>
                    <Col>
                        <img className='img-fluid' src={cooking} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;