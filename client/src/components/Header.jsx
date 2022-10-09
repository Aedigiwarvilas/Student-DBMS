import React from "react";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            Student Database Management System
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
