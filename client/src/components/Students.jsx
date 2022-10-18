import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function Students() {
  const [data, setData] = useState();

  const handleDelete = (Id) => {
    axios
      .delete(`http://localhost:5000/delete/${Id}`)
      .then()
      .catch((err) => console.log(err));
    setData(data.filter((row) => row._id !== Id));
  };

  useLayoutEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setData(res.data);
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
      <tbody>
        {data &&
          data.map((res) => {
            return (
              <tr className="text-center" key={res._id}>
                <td>{res.FirstName}</td>
                <td>{res.LastName}</td>
                <td>{res.DOB}</td>
                <td>{res.Email}</td>
                <td>{res.Phone}</td>
                <td>
                  <Link to={"/edit/" + res._id} state={res}>
                    <Button variant="dark" className="ms-3">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(res._id)}
                    className="ms-4"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}
