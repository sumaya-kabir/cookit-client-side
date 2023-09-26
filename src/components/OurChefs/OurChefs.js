import React from 'react';
import ChefCard from './ChefCard';
import chef1 from "../../assets/images/pexels-kampus-production-8629122.jpg";
import chef2 from "../../assets/images/pexels-kelly-3812011.jpg";
import chef3 from "../../assets/images/pexels-miquel-ferran-gomez-figueroa-3814446.jpg";
import { Col, Container, Row } from 'react-bootstrap';

const OurChefs = () => {
    return (
        <div>
            <h1 className='text-center p-5'>Meet Your Chefs</h1>
            <Container className='px-5 justify-content-center align-items-center'>
            <Row>
            <Col>
            <ChefCard name="Miquel Ferran" picture={chef3}/>
            </Col>
            <Col>
            <ChefCard name="Malidate Van" picture={chef2}/>
            </Col>
            <Col>
            <ChefCard name="Anna Shvets" picture={chef1}/>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default OurChefs;