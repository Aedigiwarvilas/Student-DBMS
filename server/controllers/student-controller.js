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
      res.status(200).json({ message: "Student Added Successfully" });
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
      res.status(200).json({ message: "Student Updated Successfully" });
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
      res.status(200).json();
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
};
