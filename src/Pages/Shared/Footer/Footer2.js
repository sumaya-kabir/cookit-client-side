import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaAddressBook, FaEnvelope, FaFax, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer2 = () => {
    return (
        <div className='bg-dark text-light px-5 pt-5'>
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <h4>About</h4>
                        <p>
                            We are an established learning platform with top class courses. All of our courses are taken by the professional chef who have successful experience in their career goals.
                        </p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h4>Popular Courses</h4>
                    </Col>
                    <Col xs={6} md={3}>
                        <h4>Pages</h4>
                        <p><Link className='text-decoration-none text-light' to='/blog'>Blog</Link></p>
                        <p><Link className='text-decoration-none text-light' to='/courses'>Courses</Link></p>
                        <p><Link className='text-decoration-none text-light' to='/faq'>FAQ</Link></p>
                        <p><Link className='text-decoration-none text-light' to='/checkout'>Checkout</Link></p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h4>Contact</h4>
                        <p><FaPhone className="text-success me-2"></FaPhone> +123456789</p>
                        <p><FaEnvelope className="text-success me-2"></FaEnvelope> cookit@email.com</p>
                        <p><FaAddressBook className="text-success me-2"></FaAddressBook> New York City, USA</p>
                        <p><FaFax className="text-success me-2"></FaFax> +10234056789</p>
                    </Col>
                    <p className='text-center pt-4'>Copyright © 2022 Cook It | Made with ❤️ by <span>Sumaya Kabir</span></p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer2;