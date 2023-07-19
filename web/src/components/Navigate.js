import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../asset/logo_brand.png";
function Navigate() {
  return (
    <Navbar expand="lg" className="bg ">
      <Container className="m-20 ">
        <Navbar.Brand href="/">
          <img src={logo} class="img-fluid" alt="" width={100}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  "
            navbarScroll
          >
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/about"x>
              About
            </Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="All Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 w-30"
              aria-label="Search"
              
            />
            
             <Button variant="outline-success">Search</Button>
             
          </Form>
          <Button className="m-2">Sign Up</Button>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Navigate;
