import React, { useState } from 'react'
import SlowComp from '../../SlowComp';

const Child = ({children}) => {
    const [count, setCount] = useState(0);
    const handleUp = () => {
        setCount((pre) => pre + 1);
    }
    return (
    <>
        {children(count)}
        <button onClick={handleUp}>Up Count</button>
    </>
    )
}

export default function GoodComp() {
  return (
    <div>
      <Child>
        {
          (count) => {
            if (count>5){
              return <p>Alo</p>
            }
          return <p>GoodComp: {count}</p>
        }}
      </Child>
      <SlowComp/>
    </div>
  )
}
