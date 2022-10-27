import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({ course }) => {
    const { id, title, picture, price, time } = course;
    return (
        <div className='mb-5'>
            <Card>
                <Card.Img className='img-height img-fluid' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='fs-6'><Link className='text-decoration-none text-dark' to={`${id}`}>{title}</Link></Card.Title>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <small className="text-muted">{time}</small>
                    <p className="text-success fw-bold">{price}</p>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Course;