import React, { useState, memo } from 'react'
import SlowComp from '../../SlowComp'

const Child = () => {
    return (
    <>
        <p>Child</p>
        <SlowComp/>
    </>
    )
};
export default function BadComp() {
    const [count, setCount] = useState(0);
    const handleUp = () => {
        setCount(count + 1);
    }
  return (
    <div>
      <p>BadComp {count}</p>
      <button onClick={handleUp}>UP</button>
      <Child/>
    </div>
  )
}
