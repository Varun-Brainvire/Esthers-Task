import React, { useState } from "react";
import {
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
import Router , {useRouter}  from 'next/router';

const Form = () => {

  const [submitting,setSubmitting] = useState(false)

  const router = useRouter()

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
    confirmpassword: Yup
      .string()
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password:"",
        confirmpassword:"",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // console.log(values);
      }}
      handleSubmit = {(values:any) => {
        // console.log(values)
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
                <InputField type="text" placeholder="Email *" name="email" onChange={handleChange} />
                <ErrorDiv>{errors.email}</ErrorDiv>
              </InputDiv>
              <InputDiv>
                <OuterPasswordDiv style={{ position: "relative" }}>
                  <InnerPasswordDiv
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      lineHeight: "0",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <line
                        x1="48"
                        y1="40.00122"
                        x2="208"
                        y2="216.00122"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></line>
                      <path
                        d="M154.9071,157.599a40.00028,40.00028,0,0,1-53.8142-59.19562"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>
                      <path
                        d="M73.99446,68.59479C33.22519,89.24034,16,128.00122,16,128.00122s32,71.99219,112,71.99219a118.0238,118.0238,0,0,0,53.99756-12.59461"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>
                      <path
                        d="M208.60953,169.10059C230.41132,149.57342,240,128.00122,240,128.00122S208,55.99341,128,55.99341a125.31923,125.31923,0,0,0-20.68221,1.68414"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>
                      <path
                        d="M135.52737,88.709a40.02411,40.02411,0,0,1,32.29785,35.52874"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>
                    </svg>
                  </InnerPasswordDiv>
                  <InputField type="password" placeholder="Password *" name="password" onChange={handleChange}/>
                  <ErrorDiv>{errors.password}</ErrorDiv>
                </OuterPasswordDiv>
              </InputDiv>
              <InputDiv>
                <OuterPasswordDiv>
                  <InnerPasswordDiv>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <line
                        x1="48"
                        y1="40.00122"
                        x2="208"
                        y2="216.00122"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></line>
                      <path
                        d="M154.9071,157.599a40.00028,40.00028,0,0,1-53.8142-59.19562"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>
                      <path
                        d="M73.99446,68.59479C33.22519,89.24034,16,128.00122,16,128.00122s32,71.99219,112,71.99219a118.0238,118.0238,0,0,0,53.99756-12.59461"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>
                      <path
                        d="M208.60953,169.10059C230.41132,149.57342,240,128.00122,240,128.00122S208,55.99341,128,55.99341a125.31923,125.31923,0,0,0-20.68221,1.68414"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>
                      <path
                        d="M135.52737,88.709a40.02411,40.02411,0,0,1,32.29785,35.52874"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></path>
                    </svg>
                  </InnerPasswordDiv>
                  <InputField type="password" placeholder="Confirm Password *" name="confirmpassword" onChange={handleChange}/>
                  <ErrorDiv>{errors.confirmpassword}</ErrorDiv>
                </OuterPasswordDiv>
              </InputDiv>
            </fieldset>

            <CreateAccountButton type="submit" onClick={() => {
              handleSubmit
              setSubmitting(!submitting)
              if(submitting == true) {
                router.push({
                  pathname:"/step2",
                  query:{name:values.userName,email:values.email}
                })
              }
            }}>
              Create Account
            </CreateAccountButton>

            <AggrementTextDiv>
              <AggrementText>
                By signing up, you accept our term of use. Read more about how
                we collect, use and share your data in our privacy policy and
                how we use cookies and similar technology in our cookie policy.
              </AggrementText>
            </AggrementTextDiv>

            <LineDiv></LineDiv>

            <AlreadyAccountDiv>
              <AlreadyAccounText>Already have an account?</AlreadyAccounText>
            </AlreadyAccountDiv>

            <StyledLink href="/">Login</StyledLink>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
