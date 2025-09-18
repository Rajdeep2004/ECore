import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Policy-Ecommerce App"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="Contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Privacy Policy</h1>
          <p>Checking Everthing Properly</p>
          <p>Taking Goods Focusly</p>
          <p>Packing Everthing Properly</p>
          <p>Pickup OnTime</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
