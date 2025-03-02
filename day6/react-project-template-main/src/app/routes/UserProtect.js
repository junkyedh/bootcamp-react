import React from 'react'
import { LOCAL_EMAIL } from '../../settings/localVar'
import { Navigate } from 'react-router-dom'

//higher order component: HOC
export default function UserProtect({children}) {
    //magic number: so ky tu, gia tri bat ky gan tren code, nhưng tiem tang 1 so loi nghiep vu nao do
    if (!localStorage.getItem(LOCAL_EMAIL)) { //kiem tra xem user da login chua, neu chua thi chuyen huong ve trang login
        return(
        <>
            <Navigate to={"/login"}/>
        </>
        )
    }
  return <>{children}</>;
}
