// import React, { useState } from "react";
// import Layout from "../../components/Layout/Layout";
// import "../../styles/AuthStyle.css";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [address, setAddress] = useState("");
//   // const [role, setRole] = useState("");

//   const navigate = useNavigate();

//   // crete this function for taking data and submit data from the user in this form

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/v1/auth/register", {
//         name,
//         email,
//         password,
//         phone,
//         address,
//         answer,
//       });
//       if (res.data.success) {
//         toast.success(res.data.message);
//         navigate("/login");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something Went Wrong");
//     }
//     // toast.success("Register Successfully");
//   };
//   // console.log(process.env.REACT_APP_APT);

//   return (
//     <Layout title={"Register- Ecommerce app"}>
//       {/* */}

//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <h1 className="title">Register Page</h1>
//           <div className="mb-3">
//             {/* <label htmlFor="exampleInputName" className="form-label">
//               Name
//             </label> */}
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Name"
//               required
//               autoFocus
//               // aria-describedby="emailHelp"
//             />
//             {/* <div id="emailHelp" className="form-text">
//               We'll never share your email with anyone else.
//             </div> */}
//           </div>

//           <div className="mb-3">
//             {/* <label htmlFor="exampleInputName" className="form-label">
//               Email
//             </label> */}
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Email"
//               required

//               // aria-describedby="emailHelp"
//             />
//           </div>

//           {/* for role input
//           <div className="mb-3">
//             {/* <label htmlFor="exampleInputName" className="form-label">
//               Email
//             </label> */}
//           {/* <input
//               type="number"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="form-control"
//               id="exampleInputrole1"
//               placeholder="Enter Your Role 0 for User and 1 for Admin"
//               required

//               // aria-describedby="emailHelp"
//             />
//           </div> */}

//           <div className="mb-3">
//             {/* <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label> */}
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Enter Your Password"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             {/* <label htmlFor="exampleInputName" className="form-label">
//               Phone
//             </label> */}
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Phone"
//               required

//               // aria-describedby="emailHelp"
//             />
//           </div>

//           <div className="mb-3">
//             {/* <label htmlFor="exampleInputName" className="form-label">
//               Address
//             </label> */}
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Address"
//               required

//               // aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             {/* <label htmlFor="exampleInputName" className="form-label">
//               Address
//             </label> */}
//             <input
//               type="text"
//               value={answer}
//               onChange={(e) => setAnswer(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Answer"
//               required

//               // aria-describedby="emailHelp"
//             />
//           </div>

//           {/* <div className="mb-3 form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id="exampleCheck1"
//             />
//             <label className="form-check-label" htmlFor="exampleCheck1">
//               Check me out
//             </label>
//           </div> */}

//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Register;

//

import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/AuthStyle.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const [address, setAddress] = useState("");
  // The default value for 'role' is set to 0, which corresponds to 'User'.
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
        role: Number(role),
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout title="Register - Ecommerce app">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Register Page</h1>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              placeholder="Enter Your Security Answer"
              required
            />
          </div>
          <div className="mb-3">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
              required
            >
              <option value="0">User</option>
              <option value="1">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
