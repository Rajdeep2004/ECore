// here akaa amara ja ja layout gulo bar bar use kora hoba oigulo korbo jata just function call korla e hoy ajai
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        {/* <ToastContainer /> */}
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "E-Commerce App",
  description: "MERN Stack Project",
  keywords: "MERN,REACT,MOGOODB",
  author: "Rajdeep",
};

export default Layout;
