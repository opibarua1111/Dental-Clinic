import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';


const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <Navbar variant="dark" fixed="top" sticky="top" collapseOnSelect expand="lg" className="bg-green-600">
                <Container>
                    <Navbar.Brand href="#home">Dental Clinic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-white">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-white">Services</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus" className="text-white">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/team" className="text-white">Team</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;