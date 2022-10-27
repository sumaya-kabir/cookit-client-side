import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => {
            setError(error.message);
        })
    }

    return (
        <div className='w-50 mx-auto my-5 border rounded p-5'>
            <h3 className='text-center pb-3'>Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Forgot Password" />
                </Form.Group>

                <p className='text-danger'>{error}</p>

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