import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarCom = () => {
    return (
        <div className="sticky-top">
            <Navbar expand="lg" variant="dark" className="bg-dark">
                <Container>
                    <Navbar.Brand href="/" className="fw-bold fs-4">NTT Explorer.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <Nav.Link as={NavLink} to="/" className="mx-2">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/destinasi" className="mx-2">Destinasi</Nav.Link>
                            <Nav.Link as={NavLink} to="/kuliner" className="mx-2">Kuliner</Nav.Link> 
                            <Nav.Link as={NavLink} to="/quiz" className="mx-2">Kuis</Nav.Link>
                            <Nav.Link as={NavLink} to="/tentangkami" className="mx-2">Tentang Kami</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarCom;

