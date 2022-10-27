import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  

  const handleLogOut = () => {
    logOut()
    .then( () => {
      
    })
    .catch(error => {
      console.error(error);
    }) 
  }

  return (
    <Navbar sticky="top" className='px-3' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='text-success text-center border border-success border-2 px-2 rounded'><h2>Cook It</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex px-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='p-2 text-decoration-none text-success fw-bold ' to='/'>Home</Link>
            <Link className='p-2 text-decoration-none text-dark ' to='/courses'>Courses</Link>
            <Link className='p-2 text-decoration-none text-dark ' to='/blog'>Blog</Link>
            <Link className='p-2 text-decoration-none text-dark ' to='/faq'>FAQ</Link>
            {
              user?.uid 
              ?
              <Button onClick={handleLogOut} className='btn-success'>LogOut</Button>
              :
              <>
                <Link className='p-2 text-decoration-none text-dark ' to='/signup'>Sign Up</Link>
                <Link className='px-2 text-decoration-none text-light' to='/login'><Button className='btn-success'>Login</Button></Link>
              </>
              
            }

          </Nav>
          {
            user?.uid 
            ?
            <>
              
                <h6>Hey, {user?.displayName}</h6>
                <img style={{height: 30, width: 30}} className='ms-2 rounded-circle' src={user?.photoURL} alt="" />
          
            </>
          : 
          <FaUser></FaUser>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;