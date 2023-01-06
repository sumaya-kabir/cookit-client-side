import React from 'react';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {signIn, setLoading, providerLogin, passwordReset} = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider  = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

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
            if(user.emailVerified){
                navigate(from, {replace: true});
            } else {
                toast.error("Your email is not verified")
            }
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handlePasswordReset = (event) => {
        if(!userEmail){
            alert('Please enter your email address');
            return;
        }
        passwordReset(userEmail)
        .then(() => {
            alert('Password Reset Email sent')
        })
        .catch( error => {
            console.log("error:", error)
        })
    }

    return (
        <div className='w-50 mx-auto my-5 border rounded p-5'>
            <h3 className='text-center pb-3'>Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" required />
                </Form.Group>
                <button className='border-0 bg-light text-success' onClick={handlePasswordReset}>Forgot Password</button>

                <p className='text-danger'>{error}</p>

                <Button className='w-100' variant="success" type="submit">
                    Login
                </Button>

                <div className='text-center mt-2'>
                <p>Or</p>
                <Button onClick={handleGoogleSignIn} className='w-100 mb-2' variant="outline-primary">Google Login</Button>
                <Button onClick={handleGithubSignIn} className='w-100' variant="outline-secondary">GitHub Login</Button>
                </div>
            </Form>
            <p className='mt-3 text-center'>Not have an account? <Link className='text-success' to='/signup'>Create a new account</Link></p>
        </div>
    );
};

export default Login;