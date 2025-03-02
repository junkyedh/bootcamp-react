import React, { useEffect, useRef, useState } from "react";
import { addUsers, getUsers } from ".//services/add";
import { useNavigate } from "react-router-dom";

// import { sCount } from "./homeStore";

export default function AddUser() {
  const [ls, setLs] = useState([]);
  const refInput = useRef({});
  const nav = useNavigate();

  useEffect(() => {
    getUsers().then((data) => {
      setLs(data);
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    refInput.current[name] = value;
  };

  const handleAdd = () => {
    addUsers(refInput.current, nav).then((data) => {
      setLs(data);
    });
  };

  return (
    <div>
      <label>id</label>
      <input onChange={handleChange} name="id" /> <br />
      <label>email</label>
      <input onChange={handleChange} name="email" /> <br />
      <label>gender</label>
      <input onChange={handleChange} name="gender" /> <br />
      <label>name</label>
      <input onChange={handleChange} name="name" /> <br />
      <label>address</label>
      <input onChange={handleChange} name="address" /> <br />
      <label>dob</label>
      <input onChange={handleChange} name="dob" /> <br />
      <label>phone</label>
      <input onChange={handleChange} name="phone" /> <br />
      <label>avatar</label>
      <input onChange={handleChange} name="avatar" /> <br />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
