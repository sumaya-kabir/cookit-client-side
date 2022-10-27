import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { useState } from 'react';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("Light Theme");

  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(error => {
        console.error(error);
      })
  }

  const toggleThemebtn = () => {
    if (theme === "Dark-theme") {
      setTheme("Light-theme");
    } else {
      setTheme("Dark-theme");
    }
  }

  return (
    <Navbar sticky="top" className='px-3' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='text-success text-center border border-success border-2 px-2 rounded'><h2>Cook It</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

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
                <Button onClick={handleLogOut} className='btn-success ms-2'>LogOut</Button>
                :
                <>
                  <Link className='p-2 text-decoration-none text-dark ' to='/signup'>Sign Up</Link>
                  <Link className='px-2 text-decoration-none text-light' to='/login'><Button className='btn-success'>Login</Button></Link>
                </>

            }
            <button className='rounded ms-2 text-success border-success' onClick={toggleThemebtn}>
            {theme}
            </button>
          </Nav>
          
          {
            user?.uid
              ?
              <>

                <h6>Hey, {user?.displayName}</h6>
                <img style={{ height: 30, width: 30 }} className='ms-2 rounded-circle' src={user?.photoURL} alt="" />

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