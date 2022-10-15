import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        if (data !== res.data) {
          setData(res.data);
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Table striped bordered>
      <thead className="bg-dark text-white text-center">
        <tr>
          <th className="p-3">First Name</th>
          <th className="p-3">Last Name</th>
          <th className="p-3">DOB</th>
          <th className="p-3">Email</th>
          <th className="p-3">Phone</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>{DataTable()}</tbody>
    </Table>
  );
}
