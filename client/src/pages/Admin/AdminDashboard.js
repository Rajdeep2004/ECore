import React from "react";
import Layout from "../../components/Layout/Layout.js";
import AdminMenu from "../../components/Layout/AdminMenu.js";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  console.log(auth);
  return (
    <Layout title={"Admin Dashboard- Ecommerce App"}>
      <div className="container-fluid  m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>

          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name:{auth?.user?.Name}</h3>
              <h3> Admin Email:{auth?.user?.Email}</h3>
              <h3> Admin Contact:{auth?.user?.Phone}</h3>
              <h3> Admin Address:{auth?.user?.Address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
