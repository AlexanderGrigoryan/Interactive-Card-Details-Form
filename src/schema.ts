import * as yup from "yup";

const schema = yup.object({
    cardholder: yup
      .string()
      .required("Can’t be blank")
      .matches(/^[A-Za-z\s]*$/, "Wrong formats, letters only"),
    cardnumber: yup
      .string()
      .required("Can’t be blank")
      .matches(/^[0-9]*$/, "Wrong formats, numbers only")
      .length(16, "Should be 16 digits"),
    monthinput: yup
      .string()
      .required("Can’t be blank")
      .matches(/^[0-9]*$/, "Wrong formats, numbers only")
      .length(2, "Should be 2 digits"),
    yearinput: yup
      .string()
      .required("Can’t be blank")
      .matches(/^[0-9]*$/, "Wrong formats, numbers only")
      .length(2, "Should be 2 digits"),
    cvcinput: yup
      .string()
      .required("Can’t be blank")
      .matches(/^[0-9]*$/, "Wrong formats, numbers only")
      .length(3, "Should be 3 digits"),
  });

  export default schema