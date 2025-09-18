import React from "react";
import Layout from "../components/Layout/Layout";
import { HiBuildingOffice } from "react-icons/hi2";

const About = () => {
  return (
    <Layout title={"About-Ecommerce App"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">
            {" "}
            <HiBuildingOffice /> About Us:
          </h1>
          <p className="text-justify mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            officia minus, debitis aliquam unde recusandae error at, similique
            sunt accusamus quis perferendis quidem suscipit cupiditate labore
            sed corporis qui iure? Rem dignissimos et aliquid quidem eveniet
            totam deserunt placeat quod labore modi temporibus similique, a,
            repudiandae, nostrum porro sit delectus.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
