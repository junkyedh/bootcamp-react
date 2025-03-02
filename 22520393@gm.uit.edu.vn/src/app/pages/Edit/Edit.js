import React, { useState, useEffect } from "react";
import { updateUsers } from "./services/edit";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditUser() {
  const [form, setForm] = useState({});
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setForm(location.state);
    }
  }, [location.state]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    updateUsers(form, nav).then(() => {});
  };

  return (
    <div>
      <label>id</label>
      <input name="id" value={form.id || ""} readOnly /> <br />
      <label>email</label>
      <input
        name="email"
        value={form.email || ""}
        onChange={handleChange}
      />{" "}
      <br />
      <label>gender</label>
      <input
        name="gender"
        value={form.gender || ""}
        onChange={handleChange}
      />{" "}
      <br />
      <label>name</label>
      <input name="name" value={form.name || ""} onChange={handleChange} />{" "}
      <br />
      <label>address</label>
      <input
        name="address"
        value={form.address || ""}
        onChange={handleChange}
      />{" "}
      <br />
      <label>dob</label>
      <input name="dob" value={form.dob || ""} onChange={handleChange} /> <br />
      <label>phone</label>
      <input
        name="phone"
        value={form.phone || ""}
        onChange={handleChange}
      />{" "}
      <br />
      <label>avatar</label>
      <input
        name="avatar"
        value={form.avatar || ""}
        onChange={handleChange}
      />{" "}
      <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
