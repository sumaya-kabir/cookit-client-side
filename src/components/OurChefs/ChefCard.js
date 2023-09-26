import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./ChefCard.css";

const ChefCard = ({ picture, name }) => {

    return (
        <Row xs={1} md={2}>
            <Col>
                <Card
                    style={{
                        width: '18rem',
                        height: '28rem',
                        margin: '5px',
                        border: 'none'
                    }}>
                    <Card.Img style={{ height: '24rem' }} variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title
                            style={{
                                backgroundColor: 'white',
                                position: 'absolute',
                                bottom: 55,
                                left: 0,
                                padding: '7px',
                                fontSize: '18px'
                            }}
                        >
                            {name}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default ChefCard;