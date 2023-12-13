import Header from "@/components/SignupBanner";
import LoginDiv from "@/components/LoginDiv/LoginDiv";
import React from "react";
import Layout from "@/components/Layout";

const SignUp = () => {
  return (
    <>
    <Layout>
    <Header />
    <LoginDiv />
    </Layout>
      {/* <Header />
      <LoginDiv /> */}
    </>
  );
};

export default SignUp;
