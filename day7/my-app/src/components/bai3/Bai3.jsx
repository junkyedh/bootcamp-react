import React from 'react'
import BadComp from './BadComp'
import GoodComp from './GoodComp'
import SlowComp from '../../SlowComp';

//Component As Prop
//Bai3 component cha khong render duoi moi hinh thuc
const Child = () => {
    return (
    <>
        <p>Child</p>
        <SlowComp/>
    </>
    )
};

export default function Bai3() {
  return (
    <div>
        <p>Bai3</p>
        <BadComp/>
        <hr/>
        <GoodComp ui={<Child />}/>
    </div>
  )
}
