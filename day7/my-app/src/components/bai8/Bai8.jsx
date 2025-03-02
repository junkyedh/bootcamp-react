import React, { useState } from 'react'

const Child = ({name}) => {
    return(
        <>
            <p>{name}</p>
            <input/>
        </>
    )
}
//Viec thay doi du lieu cua component xay ra chung 1 vi tri hien thi 
export default function Bai8() {
    const [isAdmin, setIsAdmin] = useState(true);
  return (
    <div>
        <button onClick = {() => setIsAdmin(!isAdmin)}>
            Change Role
        </button>
      {isAdmin ? <Child key ={1} name="Admin"/> : <Child key={2} name="User"/>}
    </div>
  )
}
