// import React from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import Layout from "./../../components/Layout/Layout";

// const Users = () => {
//   return (
//     <Layout title={"Users - Ecommerce App"}>
//       <div className="container-fluid  m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1 className="text-center ">All Users </h1>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Users;

import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Function to get all users
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-users");
      if (data?.success) {
        setUsers(data.users);
      } else {
        toast.error("Failed to fetch users");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetching users");
    }
  };

  // Lifecycle method to fetch users on component mount
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Layout title={"Users - Ecommerce App"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Users</h1>
            <div className="p-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((u, i) => (
                    <tr key={u._id}>
                      <td>{i + 1}</td>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>{u.phone}</td>
                      <td>{u.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
