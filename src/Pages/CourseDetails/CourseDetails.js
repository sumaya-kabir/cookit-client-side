import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaBullhorn, FaBusinessTime, FaChartBar, FaDollarSign, FaEye, FaStar, FaUser, } from "react-icons/fa";


const CourseDetails = () => {
    const details = useLoaderData();
    const { id, title, picture, description, total_students, lectures,ratings, total_views, level, instructor, price, time } = details;
    return (
        <div className='m-5'>
            <Container>
                <Row>
                    <Col sm={9}>
                        <h1>{title}</h1>
                        <div className='d-flex my-5 justify-content-between'>
                            <div className='d-flex w-25'>
                                <img style={{ height: 40, width: 40 }} className='me-2 rounded-circle' src={instructor.img} alt="" />
                                <div>
                                    <small className='text-muted'>Instructor</small>
                                    <p>{instructor.name}</p>
                                </div>
                            </div>
                            <div>
                                    <small className='text-muted'>Course Views</small>
                                    <p><FaEye className='text-success'></FaEye>{total_views}</p>
                            </div>
                            <div className='me-4'>
                                    <small className='text-muted'>Reviews</small>
                                    <p><FaStar className='text-warning'></FaStar>{ratings}</p>
                            </div>
                        </div>
                        <div className='pb-5'>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={picture} />
                                <Card.Body>
                                    <Card.Text>
                                        {description}

                                    </Card.Text>
                                    <Link className='text-decoration-none' to={`/checkout/${id}`}>
                                        <Button variant="success">Get Premium Access</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    {/* Side bar of details page */}
                    <Col sm={3}>
                    <Link className='text-decoration-none' to={`/checkout/${id}`}>
                        <Button className='btn-lg bg-success text-light w-100'>Enroll Course</Button>
                    </Link>
                        <div className='mt-5'>
                            <ListGroup>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    <p>Price: <strong>{price}</strong></p>
                                    <FaDollarSign className='text-success fs-5'></FaDollarSign>
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    <p>Enrolled: <strong>{total_students} students</strong></p>
                                    <FaUser className='text-success fs-5'></FaUser>
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    <p>Duration: <strong>{time}</strong></p>
                                    <FaBusinessTime className='text-success fs-5'></FaBusinessTime>
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    <p>Lectures: <strong>{lectures}</strong></p>
                                    <FaBullhorn className='text-success fs-5'></FaBullhorn>
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    <p>Level: <strong>{level}</strong></p>
                                    <FaChartBar className='text-success fs-5'></FaChartBar>
                                </ListGroup.Item>
                                
                            </ListGroup>
                        </div>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default CourseDetails;