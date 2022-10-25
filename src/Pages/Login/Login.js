import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-50 mx-auto my-5 border rounded p-5'>
            <h3 className='text-center pb-3'>Login</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Forgot Password" />
                </Form.Group>
                <Button className='w-100' variant="success" type="submit">
                    Login
                </Button>

                <div className='text-center mt-2'>
                <p>Or</p>
                <Button className='w-100 mb-2' variant="outline-primary">Google Login</Button>
                <Button className='w-100' variant="outline-secondary">GitHub Login</Button>
                </div>
            </Form>
            <p className='mt-3 text-center'>Not have an account? <Link className='text-success' to='/signup'>Create a new account</Link></p>
        </div>
    );
};

export default Login;