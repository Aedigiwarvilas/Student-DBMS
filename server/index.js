const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/student-model");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.Port || 5000;
const URI = "mongodb://localhost:27017/StudentDatabase";

mongoose
  .connect(URI)
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

// Add a student
app.post("/add", (req, res) => {
  const studentRecord = new Student({
    RollNo: req.body.rollNo,
    FirstName: req.body.firstName,
    LastName: req.body.lastName,
    Branch: req.body.branch,
    DOB: req.body.dob,
    Email: req.body.email,
    Phone: req.body.phone,
  });
  studentRecord
    .save()
    .then(() => {
      console.log("Student Document Inserted Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Read All Students
app.get("/", (req, res) => {
  Student.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Edit Student
app.put("/edit/:Id", (req, res) => {
  let Id = req.params.Id;
  Student.findByIdAndUpdate(
    { _id: Id },
    {
      RollNo: req.body.rollNo,
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      Branch: req.body.branch,
      DOB: req.body.dob,
      Email: req.body.email,
      Phone: req.body.phone,
    }
  )
    .then(() => {
      console.log("Student Document Updated Succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Delete Student By Id
app.delete("/delete/:Id", (req, res) => {
  let Id = req.params.Id;
  Student.findByIdAndDelete({ _id: Id })
    .then(() => {
      console.log("Student Document Deleted Successfully");
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log("Server Running at Port " + PORT));
