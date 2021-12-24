import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar variant="dark" fixed="top" sticky="top" collapseOnSelect expand="lg" className="bg-green-600">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://i.ibb.co/wKZ2JX3/dental-logo.png" width="20%" className="inline-block" alt="" />Dental
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-white">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-white">Services</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus" className="text-white">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/gellary" className="text-white">Gellary</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} className="px-3 py-1 rounded-full bg-white text-lg font-medium text-green-600 hover:text-green-800" variant="light"><i class="fas fa-sign-out-alt pl-1"></i> Logout</Button>
                            :
                            <Nav.Link className="px-3 py-1 rounded-full bg-white text-lg font-medium text-green-600 hover:text-green-800" as={Link} to="/login"><i class="fas fa-sign-in-alt pl-1"></i> Login</Nav.Link>
                        }
                        {user?.email && <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;