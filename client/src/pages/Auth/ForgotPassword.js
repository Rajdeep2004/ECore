import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/AuthStyle.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  //   const location = useLocation();

  //   const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        // setAuth({
        //   ...auth,
        //   user: res.data.user,
        //   token: res.data.token,
        // });

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  return (
    <Layout title={"Forgot Password -Ecommerce App "}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Reset Password</h1>

          <div className="mb-3">
            {/* <label htmlFor="exampleInputName" className="form-label">
                  Email
                </label> */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required

              // aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            {/* <label htmlFor="exampleInputName" className="form-label">
                  Email
                </label> */}
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Answer"
              required

              // aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            {/* <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label> */}
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your New Password"
              required
            />
          </div>
          {/* <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div> */}

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
