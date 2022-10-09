import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import CloseButton from "react-bootstrap/esm/CloseButton";

export default function StudentAddForm() {
  const [modalShow, setModalShow] = useState(false);
  const [rollNo, setRollNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [branch, setBranch] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleReset = () => {
    setRollNo("");
    setFirstName("");
    setLastName("");
    setBranch("");
    setDob("");
    setEmail("");
    setPhone("");
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/add", {
        rollNo,
        firstName,
        lastName,
        branch,
        dob,
        email,
        phone,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    handleClose();
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
                value={rollNo}
                name={rollNo}
                onChange={(evt) => {
                  setRollNo(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                name={firstName}
                onChange={(evt) => {
                  setFirstName(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                name={lastName}
                onChange={(evt) => {
                  setLastName(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                value={branch}
                name={branch}
                onChange={(evt) => {
                  setBranch(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                type="text"
                value={dob}
                name={dob}
                onChange={(evt) => {
                  setDob(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={email}
                name={email}
                onChange={(evt) => {
                  setEmail(evt.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                name={phone}
                onChange={(evt) => {
                  setPhone(evt.target.value);
                }}
              />
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
