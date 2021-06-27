import React from "react";
import AdminLayout from "../layouts/AdminLayout";
import { isAuthenticated } from "../../utils/authHelpers";
import { Link } from "react-router-dom";

const AdminDashboard = ({ history }) => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  return (
    <AdminLayout history={history}>
      <h1 className="text-3xl text-gray-700 font-bold">Welcome to dashboard</h1>
    </AdminLayout>
  );
};

export default AdminDashboard;
