import React, { useState } from "react";
import {
  A,
  AggrementText,
  AggrementTextDiv,
  AlreadyAccounText,
  AlreadyAccountDiv,
  CreateAccountButton,
  ErrorDiv,
  InnerPasswordDiv,
  InputDiv,
  InputField,
  LineDiv,
  OuterPasswordDiv,
  StyledLink,
} from "./Form.styles";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Router, { useRouter } from "next/router";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Form = () => {
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(
        2,
        "Please enter valid username. A username should be maximum 20 characters and can only include numbers, small letters, “_” or “.”, no other characters are allowed"
      )
      .required("Please enter valid username"),
    email: Yup.string()
      .email("Please enter email in valid format")
      .required("Please enter your email"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Your password is too short."),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please enter password"),
  });

  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        confirmpassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
      }}
      handleSubmit={(values: any) => {
        
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        isSubmitting,
        isValidating,
        isValid,
        handleChange,
        setFieldValue,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <fieldset style={{ marginTop: "35px", border: "none" }}>
              <InputDiv>
                <InputField
                  type="text"
                  placeholder="Username *"
                  name="userName"
                  onChange={handleChange}
                />

                {/* <div style={{backgroundColor:"red"}}></div> */}

                <ErrorDiv>{errors.userName}</ErrorDiv>
                {/* {errors.userName && touched.userName && (
                    <ErrorDiv className="errorUser" name="userName">{errors.userName}</ErrorDiv>
                )} */}
              </InputDiv>
              <InputDiv>
                <InputField
                  type="text"
                  placeholder="Email *"
                  name="email"
                  onChange={handleChange}
                />
                <ErrorDiv>{errors.email}</ErrorDiv>
              </InputDiv>
              <InputDiv>
                <OuterPasswordDiv>
                  <InnerPasswordDiv
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </InnerPasswordDiv>
                  <InputField
                    type={showPassword ? "text" : "password"}
                    placeholder="Password *"
                    name="password"
                    onChange={handleChange}
                  />
                  <ErrorDiv>{errors.password}</ErrorDiv>
                </OuterPasswordDiv>
              </InputDiv>
              <InputDiv>
                <OuterPasswordDiv>
                  <InnerPasswordDiv
                    onClick={() => setConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </InnerPasswordDiv>
                  <InputField
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password *"
                    name="confirmpassword"
                    onChange={handleChange}
                  />
                  <ErrorDiv>{errors.confirmpassword}</ErrorDiv>
                </OuterPasswordDiv>
              </InputDiv>
            </fieldset>

            <CreateAccountButton
              type="submit"
              onClick={() => {
                handleSubmit;
                setSubmitting(true);
                if (submitting == true) {
                  router.push({
                    pathname: "/signup",
                    query: { name: values.userName, email: values.email },
                  });
                }
              }}
            >
              Create Account
            </CreateAccountButton>

            <AggrementTextDiv>
              <AggrementText>
                By signing up, you accept our term of use. Read more about how
                we collect, use and share your data in our{" "}
                <A href="https://dev.esthers.shop/legal/privacy-policy">
                  privacy policy
                </A>{" "}
                and how we use cookies and similar technology in our{" "}
                <A href="https://dev.esthers.shop/legal/cookie-policy">
                  cookie policy
                </A>{" "}
                .
              </AggrementText>
            </AggrementTextDiv>

            <LineDiv></LineDiv>

            <AlreadyAccountDiv>
              <AlreadyAccounText>Already have an account?</AlreadyAccounText>
            </AlreadyAccountDiv>

            <StyledLink href="/login">Login</StyledLink>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
