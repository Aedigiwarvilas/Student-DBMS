import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useFormik } from "formik";
import { FormValidation } from "../validations/FormValidations";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams, useLocation } from "react-router-dom";

export default function EditStudent() {
  const { Id } = useParams();
  const obj = useLocation().state;
  const navigate = useNavigate();

  const initialFormValues = {
    firstName: obj.FirstName,
    lastName: obj.LastName,
    dob: obj.DOB,
    email: obj.Email,
    phone: obj.Phone,
  };

  const { values, errors, touched, handleChange, handleSubmit, handleReset } =
    useFormik({
      initialValues: initialFormValues,
      validationSchema: FormValidation,
      onSubmit: (values) => {
        axios
          .put(`http://localhost:5000/edit/${Id}`, values)
          .then()
          .catch((err) => console.log(err));
        handleClose();
      },
    });

  const handleClose = () => {
    navigate("/");
  };

  return (
    <>
      <Container fluid>
        <Row className="m-4 p-4 justify-content-md-center">
          <Col sm={6}>
            <Card>
              <Form onSubmit={handleSubmit}>
                <Card.Header>Student Update Form</Card.Header>
                <Card.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={values.firstName}
                      name="firstName"
                      onChange={handleChange}
                    />
                    {errors.firstName && touched.firstName ? (
                      <Form.Text className="text-danger">
                        {errors.firstName}
                      </Form.Text>
                    ) : null}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={values.lastName}
                      name="lastName"
                      onChange={handleChange}
                    />
                    {errors.lastName && touched.lastName ? (
                      <Form.Text className="text-danger">
                        {errors.lastName}
                      </Form.Text>
                    ) : null}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>DOB</Form.Label>
                    <Form.Control
                      type="text"
                      value={values.dob}
                      name="dob"
                      onChange={handleChange}
                      placeholder="DD-MM-YYYY"
                    />
                    {errors.dob && touched.dob ? (
                      <Form.Text className="text-danger">
                        {errors.dob}
                      </Form.Text>
                    ) : null}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      value={values.email}
                      name="email"
                      onChange={handleChange}
                      placeholder="test@gmail.com"
                    />
                    {errors.email && touched.email ? (
                      <Form.Text className="text-danger">
                        {errors.email}
                      </Form.Text>
                    ) : null}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      value={values.phone}
                      name="phone"
                      onChange={handleChange}
                      placeholder="9999999999"
                    />
                    {errors.phone && touched.phone ? (
                      <Form.Text className="text-danger">
                        {errors.phone}
                      </Form.Text>
                    ) : null}
                  </Form.Group>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button className="m-1" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button className="m-1" onClick={handleReset}>
                    Reset
                  </Button>
                  <Button className="m-1" type="submit">
                    Update
                  </Button>
                </Card.Footer>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
