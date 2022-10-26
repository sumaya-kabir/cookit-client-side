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
                    <Col className='border-top p-3' sm={3}>
                        <h3 className='mb-4'>Popular Courses</h3>
                        {
                            courses.map(course => <SideBar
                                key={course.id}
                                course={course}
                            ></SideBar>)
                        }
                    </Col>
                    <Col className='p-3' sm={9}>
                        <h3 className='mb-4'>Featured Courses</h3>
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