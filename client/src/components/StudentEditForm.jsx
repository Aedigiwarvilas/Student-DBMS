import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/esm/CloseButton";
import axios from "axios";

export default function StudentEditForm(props) {
  const [modalShow, setModalShow] = useState(false);
  const [rollNo, setRollNo] = useState(props.obj.RollNo);
  const [firstName, setFirstName] = useState(props.obj.FirstName);
  const [lastName, setLastName] = useState(props.obj.LastName);
  const [branch, setBranch] = useState(props.obj.Branch);
  const [dob, setDob] = useState(props.obj.DOB);
  const [email, setEmail] = useState(props.obj.Email);
  const [phone, setPhone] = useState(props.obj.Phone);

  const handleReset = () => {
    setRollNo(props.obj.RollNo);
    setFirstName(props.obj.FirstName);
    setLastName(props.obj.LastName);
    setBranch(props.obj.Branch);
    setDob(props.obj.DOB);
    setEmail(props.obj.Email);
    setPhone(props.obj.Phone);
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/edit/${props.obj._id}`, {
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
        variant="dark"
        onClick={() => {
          handleReset();
          setModalShow(true);
        }}
      >
        Edit
      </Button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={modalShow}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Student Edit Form
          </Modal.Title>
          <CloseButton onClick={handleClose} />
        </Modal.Header>
        <Form className="m-1" onSubmit={handleUpdate}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>RollNo</Form.Label>
              <Form.Control
                type="text"
                value={rollNo}
                onChange={(evt) => setRollNo(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(evt) => setFirstName(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(evt) => setLastName(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                value={branch}
                onChange={(evt) => setBranch(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                type="text"
                value={dob}
                onChange={(evt) => setDob(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                onChange={(evt) => setPhone(evt.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleReset}>Reset</Button>
            <Button type="submit">Update</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
