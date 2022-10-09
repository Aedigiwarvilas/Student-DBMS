import React from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import StudentEditForm from "./StudentEditForm";

const StudentTableRow = (props) => {
  const { RollNo, FirstName, LastName, Branch, DOB, Email, Phone, _id } =
    props.obj;

  const handleDelete = () => {
    if (window.confirm("Are you sure to delete this record")) {
      axios
        .delete(`http://localhost:5000/delete/${_id}`)
        .then()
        .catch((err) => console.log(err));
    }
  };

  return (
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
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StudentTableRow;
