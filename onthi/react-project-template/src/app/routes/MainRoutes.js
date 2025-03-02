import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListUser from "../pages/ListUser";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageNotFound from "../layouts/PageNotFound";
import Login from "../pages/Login";
import UserProtect from "./UserProtect";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/Edit";
import DeleteUser from "../pages/DeleteUser";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <UserProtect>
              <ListUser />
            </UserProtect>
          }
        />
        <Route
          path="/add"
          element={
            <UserProtect>
              <AddUser />
            </UserProtect>
          }
        />
        <Route
          path="/edit"
          element={
            <UserProtect>
              <EditUser />
            </UserProtect>
          }
        />
        <Route
          path="/delete"
          element={
            <UserProtect>
              <DeleteUser />
            </UserProtect>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
