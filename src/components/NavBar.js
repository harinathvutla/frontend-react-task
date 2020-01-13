import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="light" bg="transparent">
          <Navbar.Brand href="#home">Douglas Foods</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" ml-auto">
              <Nav.Link href="/">Menu Item1</Nav.Link>
              <Nav.Link href="MenuItem2">Menu Item2</Nav.Link>
              <Nav.Link href="MenuItem3">Menu Item3</Nav.Link>
              <Nav.Link href="#deets">Menu Item4</Nav.Link>
              <Nav.Link href="#deets">Menu Item5</Nav.Link>
              <Nav.Link href="#deets">Menu Item6</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
