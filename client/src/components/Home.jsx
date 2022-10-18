import React from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Students from "./Students";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container fluid>
      <Row className="m-4 p-4 justify-content-md-center">
        <Col sm={8}>
          <h4>
            Welcome to the Student Portal.One portal to view All Existing
            Students , Adding New Students , Updating Existing Students and
            Deleting Existing Students.
          </h4>
        </Col>
        <Col sm={2}>
          <Link to="/add">
            <Button variant="primary">Add Student</Button>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm={10}>
          <Students />
        </Col>
      </Row>
    </Container>
  );
}
