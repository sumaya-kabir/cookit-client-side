import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const details = useLoaderData();
    const { title, picture, description, ratings, level, instructor, price, time } = details;
    return (
        <div>
            <Card style={{ width: '50rem' }}>
                <Card.Title><h2>{title}</h2></Card.Title>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Text>
                        {description}
                        <h4>Price: {price}</h4>
                        <h4>Duration: {time}</h4>
                        <h4>Ratings: {ratings}</h4>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;