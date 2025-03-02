import React, { Suspense, lazy } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import PrivateRoute from "./Pages/PrivateRoute";

const Detail = lazy(() => import("./Pages/Detail"));

export default function App() {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/user");
  };
  return (
    <>
      <p>Header</p>
      <Link to={"/"}>Home</Link>
      <Link to={"/user"}>User</Link>
      <button onClick={handleClick}>User</button>
      <Link to={"/user/1"}>User 1</Link>
      {/* Search query param */}
      <Link to={"/?name=vietcpq&age=16"}>User viet</Link>

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />}>
          {/* URL Params */}
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <Suspense fallback="Loading...">
                  <Detail />
                </Suspense>
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      <hr />

      <p>Footer</p>
    </>
  );
}
