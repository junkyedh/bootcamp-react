import React from "react";
import { Navigate } from "react-router-dom";

//Higher Order Component
export default function PrivateRoute({ children }) {
  if (!localStorage.getItem("id")) {
    return <Navigate to={"/"} />;
  }
  return <>{children}</>;
}
