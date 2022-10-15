import React from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import StudentEditForm from "./StudentEditForm";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const StudentTableRow = (props) => {
  const { FirstName, LastName, DOB, Email, Phone, _id } = props.obj;

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
      <tr className="text-center">
        <td>{FirstName}</td>
        <td>{LastName}</td>
        <td>{DOB}</td>
        <td>{Email}</td>
        <td>{Phone}</td>
        <td>
          <StudentEditForm obj={props.obj} />
          <Button variant="danger" onClick={handleModal} className="ms-4">
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
