import React from 'react';
import { toast } from 'react-hot-toast';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkoutInfo = useLoaderData();
    const handleconfirmationStatus = (event) => {
        event.preventDefault();
        const form = event.target;
        form.reset();
        return toast.success('Thanks for purchasing our course');
    }
    return (
        <Container className='m-5 px-5'>
            <Row>
                <Col xs={6}>
                    <div>
                        <h2>Payment For</h2>
                        <img className='pt-4 w-50' src={checkoutInfo.picture} alt="" />
                        <p>Course Name: <span className='fw-bold fs-5'>{checkoutInfo.title}</span></p>
                        <p>Course Id: <span className='fw-bold fs-5'>{checkoutInfo.id}</span></p>
                        <p>Price: <span className='fw-bold fs-5'>{checkoutInfo.price}</span></p>
                    </div>
                </Col>
                <Col xs={6}>
                    <div>
                    <h2>Payment Details</h2>
                    <Form onSubmit={handleconfirmationStatus} className='ms-5'>
                        <Row className="my-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"

                                />

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormik03">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik04">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                />

                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik05">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Zip"
                                    name="zip"
                                />

                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                            />
                        </Form.Group>
                        <Button type="submit">Confirm Payment</Button>
                    </Form>
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default CheckOut;