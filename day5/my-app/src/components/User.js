import React from 'react'
import { sUser } from '../store'

const ssAge =sUser.slice((n)=>n.age);

export default function User() {
    const handleUp = () => {
        if (sUser.value.age == 19){
            sUser.resume();
        }
        sUser.set((n=>n.value.age +=1))
    }
  return (
    <div>
       <button onClick={handleUp}>Up age</button>
        {/* neu age la gia tri nguyen thuy thi co the dung html */}
         <p>Age: {ssAge.html}</p>
         <br/>
         <ssAge.Wrap>{(n)=> n}</ssAge.Wrap>
    </div>
  )
}
 