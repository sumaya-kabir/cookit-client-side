import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <Navbar className='px-3' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='text-success text-center border border-success border-2 px-2'><h2>Cook It</h2></Navbar.Brand>
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
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Courses</Nav.Link>
            <Nav.Link >Blog</Nav.Link>
            <Nav.Link >Sign Up</Nav.Link>
            <Button className='btn-success'>Login</Button>
            
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;