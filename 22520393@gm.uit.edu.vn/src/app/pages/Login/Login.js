import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { sLogin } from "./loginStore";
import Loading from "./partials/Loading";
import { loginEmail } from "./services/loginUserByEmail";

export default function Login() {
  const isLoading = sLogin.use();
  const ipRef = useRef();
  const nav = useNavigate();

  const handleClick = () => {
    sLogin.set(true);
    loginEmail(ipRef.current.value, nav);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <input ref={ipRef} />~
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
