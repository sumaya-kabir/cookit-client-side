import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../Shared/SideBar/SideBar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='m-5'>

            <Container>
                <Row>
                    <Col sm={3}>
                        <h3>Popular Courses</h3>
                        {
                            courses.map(course => <SideBar
                                key={course.id}
                                course={course}
                            ></SideBar>)
                        }
                    </Col>
                    <Col sm={9}>
                        <h3>Featured Courses</h3>
                        <div className='row row-cols-md-2 row-cols-lg-3'>

                            {
                                courses.map(course => <Course
                                    key={course.id}
                                    course={course}
                                ></Course>)
                            }
                        </div>
                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default Courses;