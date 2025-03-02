import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUsers } from "./services/listUser";

// import { sCount } from "./homeStore";

export default function Home() {
  const [ls, setLs] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    getUsers().then((data) => {
      setLs(data);
    });
  }, []);

  const handleAdd = () => {
    nav("/add");
  };

  const handleUpdate = (user) => () => {
    nav("/edit", { state: user });
  };

  const handeDelete = (user) => () => {
    nav("/delete", { state: user });
  };

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <h1 >LIST USERS</h1>
      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>name</th>
            <th>gender</th>
            <th>email</th>
            <th>dob</th>
            <th>phone</th>
            <>Actions</>
          </tr>
        </thead>
        <tbody>
          {ls.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.gender}</td>
                <td>{v.email}</td>
                <td>{v.dob}</td>
                <td>{v.phone}</td>
                <td>
                  <button onClick={handleUpdate(v)}>Update</button>
                </td>
                <td>
                  <button onClick={handeDelete(v)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
}
