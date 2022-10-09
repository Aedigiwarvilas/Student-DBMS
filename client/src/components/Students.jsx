import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
import StudentTableRow from "./StudentTableRow";

export default function Students() {
  const [data, setData] = useState([]);

  const DataTable = () => {
    return data.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  };

  axios
    .get("http://localhost:5000")
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.log(err));

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>RollNo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Branch</th>
          <th>DOB</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{DataTable()}</tbody>
    </Table>
  );
}
