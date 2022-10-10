import React from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import StudentEditForm from "./StudentEditForm";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const StudentTableRow = (props) => {
  const { RollNo, FirstName, LastName, Branch, DOB, Email, Phone, _id } =
    props.obj;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleModal = () => setShow(true);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/delete/${_id}`)
      .then()
      .catch((err) => console.log(err));
    handleClose();
  };

  return (
    <>
      <tr>
        <td>{RollNo}</td>
        <td>{FirstName}</td>
        <td>{LastName}</td>
        <td>{Branch}</td>
        <td>{DOB}</td>
        <td>{Email}</td>
        <td>{Phone}</td>
        <td>
          <StudentEditForm obj={props.obj} />
        </td>
        <td>
          <Button variant="danger" onClick={handleModal}>
            Delete
          </Button>
        </td>
      </tr>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Are you sure want to Delete this Student</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StudentTableRow;
