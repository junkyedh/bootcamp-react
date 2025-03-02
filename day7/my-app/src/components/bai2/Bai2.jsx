import React from 'react'
import BadComp from './BadComp'
import GoodComp from './GoodComp'

//Moving State Down
export default function Bai2() {
  return (
    <div>
        <p>Bai2</p>
        <BadComp/>
        <hr/>
        <GoodComp/>
    </div>
  )
}
