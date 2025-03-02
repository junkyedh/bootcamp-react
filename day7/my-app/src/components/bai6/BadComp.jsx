import React, { useState } from 'react'
import SlowComp from '../../SlowComp';

const Child = ({setCount}) => {
    const handleUp = () => {
        setCount((pre) => pre + 1);
    }
    return (
    <>
        <button onClick={handleUp}>Up Count</button>
    </>
    )
}
export default function BadComp() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <p>BadComp {count}</p>
      <Child setCount={setCount}/>
      <SlowComp/>
    </div>
  )
}
