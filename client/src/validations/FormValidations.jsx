import * as yup from "yup";

export const FormValidation = yup.object({
  rollNo: yup
    .string()
    .max(12, "Roll No cannot be more than 12 digits")
    .matches("[0-9]+", "Roll No Should only contain Digits")
    .required("Please Enter Roll No"),

  firstName: yup
    .string()
    .required("Please Enter First Name")
    .matches("[A-Za-z]+", "First Name should only contain alphabets")
    .max(20, "First Name should not contain more than 20 characters"),

  lastName: yup
    .string()
    .required("Please Enter Last Name")
    .matches("[A-Za-z]+", "Last Name should only contain alphabets")
    .max(20, "Last Name should not contain more than 20 characters"),

  branch: yup
    .string()
    .required("Please Enter Branch")
    .matches("[A-Za-z]+", "Branch Name should only contain alphabets"),

  dob: yup
    .string()
    .required("Please Enter DOB")
    .matches("[0-9]{2}-[0-9]{2}-[0-9]{4}", "Enter DOB in DD-MM-YYYY format"),

  email: yup
    .string()
    .matches("[a-z0-9]+@[a-z]+.com", "Enter Valid Email address")
    .required("Please Enter Email"),

  phone: yup
    .string()
    .matches("[0-9]{10}", "Phone Number Should contain 10 digits only")
    .required("Please Enter Phone"),
});
