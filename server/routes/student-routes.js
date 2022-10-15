const router = require("express").Router();
const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student-controller");

// Reading Student Documents
router.get("/", getStudents);

// Adding Student Document
router.post("/add", addStudent);

// Update Student Document
router.put("/edit/:Id", updateStudent);

//Delete Student Document
router.delete("/delete/:Id", deleteStudent);

module.exports = router;
