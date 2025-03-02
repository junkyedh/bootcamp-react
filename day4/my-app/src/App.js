import React, { useEffect, useRef, useState } from 'react';
import { addUsers, deleteUser, getUsers, updateUser } from './service';

export default function App() {
  const [list, setList] = useState([]);
  const refInput = useRef({});
  const handleChange = (event) =>{
    const {name, value} = event.target;
    refInput.current[name] = value;
  }

  useEffect(() => {
    getUsers().then(data =>{
      setList(data);
    })
  }
  , []);

  const handleAdd = () => {
    addUsers(refInput.current).then((data) =>{
      setList(data);
    })
  }
  const handleUpdate = () => {
    updateUser(refInput.current).then((data) =>{
      setList(data);
    })
  }
  const handleDelete = (id) => () => {
    deleteUser(id).then((data) =>{
      setList(data);
    })
  }
  return (
    <div>
      <label>id</label>
      <input onChange={handleChange} name="id"/> <br/> 
      <label>email</label>
      <input onChange={handleChange} name="email"/> <br/>
      <label>gender</label>
      <input onChange={handleChange} name="gender"/> <br/>
      <label>name</label>
      <input onChange={handleChange} name="name"/> <br/>
      <label>address</label>
      <input onChange={handleChange} name="address"/> <br/>
      <label>dob</label>
      <input onChange={handleChange} name="dob"/> <br/>
      <label>phone</label>
      <input onChange={handleChange} name="phone"/> <br/>
      <label>avatar</label>
      <input onChange={handleChange} name="avatar"/> <br/>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>

      <table border={1} style={{borderCollapse:"collapse"}}>
        <thead>
          <tr>
            <th><button disabled>-</button></th>
            <th>id</th>
            <th>email</th>
            <th>gender</th>
            <th>name</th>
            <th>address</th>
            <th>dob</th>
            <th>phone</th>
            <th>avatar</th>
          </tr>
        </thead>

        <tbody>
          {
            list.map((v,i)=>{
              return (
                <tr key={v.id}>
                  <td>
                    <button onClick={handleDelete(v.id)}>X</button>
                  </td>
                  <td>{v.id}</td>
                  <td>{v.email}</td>
                  <td>{v.gender}</td>
                  <td>{v.name}</td>
                  <td>{v.address}</td>
                  <td>{v.dob}</td>
                  <td>{v.phone}</td>
                  <td>
                    <img src={v.avatar} alt={v.name} style={{width: 50, height: 50}}/>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
  