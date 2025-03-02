import React, { useState, useEffect } from "react";
import { deleteUsers } from ".//services/delete";
import { useNavigate, useLocation } from "react-router-dom";
import { LOCAL_EMAIL } from "../../../settings/localVar";

// import { sCount } from "./homeStore";

export default function DeleteUser() {
  const [form, setForm] = useState({});
  const nav = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state) {
      setForm(location.state);
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state) {
      setForm(location.state);
    }
  }, [location.state]);

  useEffect(() => {
    const email = localStorage.getItem(LOCAL_EMAIL);
    if (email) {
      setEmail(email);
    }
  }, []);

  const handeDelete = (id) => () => {
    deleteUsers(id, nav).then(() => {});
  };

  return (
    <div>
      <p>Bạn chắc chắn muốn xoá User này?</p>
      <p>Email: {email}</p>
      <button onClick={handeDelete(form?.id)}>Xóa người dùng này</button>
    </div>
  );
}
