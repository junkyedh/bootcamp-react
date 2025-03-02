import React, { useState, memo, useCallback, useMemo } from 'react'
import SlowComp from '../../SlowComp'

const Child = memo (( {handleUp}) => {
    console.log("Child")
    return (
    <>
        <p>Child</p>
        <button onClick={handleUp}>UP</button>
        <SlowComp/>
    </>
    )
});
//bị lỗi giá trị count chỉ luôn là 1
// export default function GoodComp() {
//     const [count, setCount] = useState(0);
//     const handleUp =  useCallback(() => {
//         console.log(count);
//         setCount(count + 1);
//     },[]);

//giải pháp
export default function GoodComp() {
    const [count, setCount] = useState(0);
    const handleUp =  useCallback(() => {
        setCount((pre) => pre + 1);
    },[]);

    const user = useMemo(() => [],[]); //useMemo giúp tránh việc render lại khi state thay đổi

    //useMemo khac useCallback ở chỗ useCallback trả về 1 function còn useMemo trả về 1 giá trị
  return (
    <div>
      <p>GoodComp {count}</p>
      <button onClick={handleUp}>UP</button>
      <Child handleUp= {handleUp} user = {user}/>
    </div>
  )
}


//phiên bản trước khi sử dụng useCallback

// import React, { useState, memo } from 'react'
// import SlowComp from '../../SlowComp'

// const Child = memo (( {handleUp}) => {
//     console.log("Child")
//     return (
//     <>
//         <p>Child</p>
//         <SlowComp/>
//     </>
//     )
// });

// export default function GoodComp() {
//     const [count, setCount] = useState(0);
//     const handleUp = () => {
//         setCount(count + 1);
//     }
//   return (
//     <div>
//       <p>GoodComp {count}</p>
//       <button onClick={handleUp}>UP</button>
//       <Child handleUp= {handleUp}/>
//     </div>
//   )
// }
