import React, { useContext, useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { ToggleThemeContext } from '../../contexts/ThemeContext';
import { FaUserAlt } from 'react-icons/fa';
import './Header.css';

function CollapsibleExample() {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const { theme, setTheme } = useContext(ToggleThemeContext);
    const toggleTheme = () => {
        setTheme(!theme)
    };
    const signOutHandle = () => {
        logOut()
            .then(() => { })
            .catch(() => {
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/" className='text-white'>Smart Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/courses">Courses</Nav.Link>

                    </Nav>
                    <Nav className='align-items-center'>
                        {user?.uid &&
                            <div className='me-3'>
                                {
                                    user?.photoURL ?
                                        <Image src={user.photoURL} roundedCircle style={{ width: '2rem' }}></Image> :
                                        <FaUserAlt style={{ 'color': '#fff' }} />
                                }
                            </div>}

                        <div className='me-3'>
                            {
                                user?.uid &&
                                <Nav.Link to='/'>{user.displayName ? user.displayName : user.email}
                                </Nav.Link>
                            }
                        </div>
                        <div>
                            {
                                user?.uid ?
                                    <Nav.Link onClick={signOutHandle}>Sign Out</Nav.Link>
                                    :
                                    <div className='log-menu'>
                                        <Nav.Link className='log' href="/login">Log In</Nav.Link>
                                        <Nav.Link eventKey={2} href="/register">Register
                                        </Nav.Link>
                                    </div>
                            }
                        </div>
                        <div>
                            <Nav.Link onClick={toggleTheme}>{theme ? 'Dark' : 'Light'} Mode</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const Header = () => {
    return (
        <div className='header'>
            {
                CollapsibleExample()
            }
        </div>
    );
};

export default Header;

