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

const Solution = () =>{
    const [count, setCount] = useState(0);
    const handleUp = () => {
        setCount(count + 1);
    }
    return (
        <>
            <p>GoodComp {count}</p>
            <button onClick={handleUp}>UP</button>
        </>
    )
}

//sử dụng Move State Down nhóm các state tách ra thành các component con,
//không ảnh hưởng đến các component khác
export default function GoodComp() {
  return (
    <div>
      <Solution/>
      <Child/>
    </div>
  )
}
