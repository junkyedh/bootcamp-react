import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { sLogin } from './loginStore';
import { loginEmail } from './services/loginUserByEmail';
import Loading from './partials/Loading';

//elena.oquendo@example.com
//container component - logic: dai dien cho man hinh, goi api, dai dien cho tat ca cac logic
//presentation component - view: nhan props tu ben ngoai, dai dien cho giao dien (hien thi)
//SHIFT + ALT + O: xoa import thua va format -> Shift + Alt + F: prettier -> Ctrl + S: save all
export default function Login() {
    const isLoading = sLogin.use();
    const ipRef = useRef(); //tac dung: lay gia tri cua the input
    const nav = useNavigate();

    const hanldeClick = () => {
        sLogin.set(true);
        loginEmail(ipRef.current.value, nav);
    };

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <input ref={ipRef} />
            <button onClick={hanldeClick}>Submit</button>
        </div>
    )
}
