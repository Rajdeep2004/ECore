import React from "react";
import Layout from "../components/Layout/Layout";
import { MdAttachEmail, MdCall, MdOutlineAddIcCall } from "react-icons/md";

const Contact = () => {
  return (
    <Layout title={"Contact- Ecommerce App"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="Contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any types of query,Contact with us freely at anytime,any where
            !!!
          </p>
          <p className="mt-3">
            <MdAttachEmail /> : Commerce.Product@gmail.com
          </p>
          <p className="mt-3">
            <MdCall /> : 987654321(24x7)
          </p>
          <p className="mt-3">
            <MdOutlineAddIcCall /> : 987654321(Tollfree)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
