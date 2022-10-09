const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  RollNo: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Timestamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Student", studentSchema);
