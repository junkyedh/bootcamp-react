import React, { useState, memo } from "react";

const Row = memo(({ num }) => {
  console.log(num);

  return <p>User {num}</p>;
});

export default function Bai9() {
  const [ls, setLs] = useState([1, 2, 3, 4, 5]);
  const remove = () => {
    setLs(ls.filter((_, index) => index !== 1));
  };
  return (
    <div>
      <p>Bai9</p>
      <button onClick={remove}>Remove</button>
      {ls.map((value, index) => {
        return <Row key={value} num={value} />;
      })}
    </div>
  );
}
