import React from 'react'
import BadComp from './BadComp'
import GoodComp from './GoodComp'

//Expression As Function

//State can duoc doi di
//Nhung ui khong doi di duoc
//Giao dien ben ngoai can hien thi thong tin cua Component con

//
export default function Bai7() {
  return (
    <div>
      <p>Bai7</p>
      <BadComp/>
      <hr/>
      <GoodComp/>
    </div>
  )
}
