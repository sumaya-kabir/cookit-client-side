import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='w-50 mx-auto my-5 border rounded p-5'>
            <h3 className='text-center pb-3'>Sign Up</h3>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Full Name" name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Photo URL" name="photo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                
                <Button className='w-100' variant="success" type="submit">
                    Sign Up
                </Button>

                <div className='text-center mt-2'>
                <p>Or</p>
                <Button className='w-100 mb-2' variant="outline-primary">Sign Up With Google</Button>
                <Button className='w-100' variant="outline-secondary">SignUp With Github</Button>
                </div>
            </Form>
            <p className='mt-3 text-center'>Already have an account? <Link className='text-success' to='/login'>Login here</Link></p>
        </div>
    );
};

export default Signup;