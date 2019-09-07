import React from 'react';
import { Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


const NavBar = () => (
    <div className="nav-container">
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Todo List</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    </div>
);

export default NavBar;
