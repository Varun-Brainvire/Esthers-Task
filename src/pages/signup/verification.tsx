import Layout from "@/components/Layout";
import LoginVerification from "@/components/LoginVerification/LoginVerification";
import React from "react";

type Props = {};

const Verification = (props: Props) => {
  return (
    <Layout>
      <LoginVerification></LoginVerification>
    </Layout>
  );
};

export default Verification;
