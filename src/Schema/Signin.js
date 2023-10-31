import * as Yup from "yup";
export const signinSchema = Yup.object({
  name: Yup.string()
    .required("Enter Name")
    .min(2, "Mininum 1 characters")
    .max(15, "Maximum 15 characters"),
  username: Yup.string()
    .required("Enter Username")
    .min(2, "Mininum 1 characters")
    .max(15, "Maximum 15 characters"),
  email: Yup.string().email().required("Enter valid Email"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  cpassword: Yup.string()
    .required("Enter confirm Password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
