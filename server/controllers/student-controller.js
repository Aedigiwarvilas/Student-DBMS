const Student = require("../models/student-model");

// Reading Student Documents
const getStudents = (req, res) => {
  Student.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Adding Student Document
const addStudent = (req, res) => {
  const studentRecord = new Student({
    FirstName: req.body.firstName,
    LastName: req.body.lastName,
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
};

// Update Student Document
const updateStudent = (req, res) => {
  let Id = req.params.Id;
  Student.findByIdAndUpdate(
    { _id: Id },
    {
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
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
};

//Delete Student Document
const deleteStudent = (req, res) => {
  let Id = req.params.Id;
  Student.findByIdAndDelete({ _id: Id })
    .then(() => {
      console.log("Student Document Deleted Successfully");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
};
