import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
export default function Header() {
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
