import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ path, ...props }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return isLoggedIn ? <Route {...props} path={path} /> : <Navigate to="/user/signin" replace />;
}

export default ProtectedRoute;
