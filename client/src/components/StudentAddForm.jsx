import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import CloseButton from "react-bootstrap/esm/CloseButton";
import { useFormik } from "formik";
import { FormValidation } from "../validations/FormValidations";

export default function StudentAddForm() {
  const [modalShow, setModalShow] = useState(false);
  const initialFormValues = {
    rollNo: "",
    firstName: "",
    lastName: "",
    branch: "",
    dob: "",
    email: "",
    phone: "",
  };

  const { values, errors, touched, handleChange, handleReset, handleSubmit } =
    useFormik({
      initialValues: initialFormValues,
      validationSchema: FormValidation,
      onSubmit: (values) => {
        axios
          .post("http://localhost:5000/add", values)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
        handleClose();
      },
    });

  const handleClose = () => {
    setModalShow(false);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleReset();
          setModalShow(true);
        }}
      >
        Add Student
      </Button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={modalShow}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Student Registration Form
          </Modal.Title>
          <CloseButton onClick={handleClose} />
        </Modal.Header>
        <Form className="m-1" onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>RollNo</Form.Label>
              <Form.Control
                type="text"
                value={values.rollNo}
                name="rollNo"
                onChange={handleChange}
              />
              {errors.rollNo && touched.rollNo ? (
                <Form.Text className="text-danger">{errors.rollNo}</Form.Text>
              ) : null}
            </Form.Group>

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
                <Form.Text className="text-danger">{errors.lastName}</Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                value={values.branch}
                name="branch"
                onChange={handleChange}
              />
              {errors.branch && touched.branch ? (
                <Form.Text className="text-danger">{errors.branch}</Form.Text>
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
                <Form.Text className="text-danger">{errors.dob}</Form.Text>
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
                <Form.Text className="text-danger">{errors.email}</Form.Text>
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
                <Form.Text className="text-danger">{errors.phone}</Form.Text>
              ) : null}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleReset}>Reset</Button>
            <Button type="submit">Sumbit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
