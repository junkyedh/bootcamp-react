import React, { useState } from 'react'
import SlowComp from '../../SlowComp';

const Child = ({children}) => {
  const admin = [1,2,4,5,7]
    const [count, setCount] = useState(0);
    const handleUp = () => {
        setCount((pre) => pre + 1);
    }
    console.log(children);
    return (
    <>
        {children.filter((_,index) =>admin.includes()) [count]}
        <button onClick={handleUp}>Up Count</button>
    </>
    )
}

export default function GoodComp() {
  return (
    <div>
      <Child>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </Child>
      <SlowComp/>
    </div>
  )
}
