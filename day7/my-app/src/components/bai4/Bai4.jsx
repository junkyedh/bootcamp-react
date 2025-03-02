import React from 'react'
import BadComp from './BadComp'
import GoodComp from './GoodComp'
import SlowComp from '../../SlowComp';

//Component As Child
//Bai3 component cha khong render duoi moi hinh thuc
const Child = () => {
    return (
    <>
        <p>Child</p>
        <SlowComp/>
    </>
    )
};

export default function Bai4() {
  return (
    <div>
        <p>Bai4</p>
        <BadComp/>
        <hr/>
        <GoodComp>
            <Child/>
        </GoodComp>
    </div>
  )
}
