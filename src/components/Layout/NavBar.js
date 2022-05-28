import React from 'react'
import { Navbar, Container, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/">Cutomer Book</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link><Link to="/">Sign In </Link></Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link to="#">Sign Up</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link to="/AddressBookList">Welcome</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link to="/SignUp">Log Out</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar