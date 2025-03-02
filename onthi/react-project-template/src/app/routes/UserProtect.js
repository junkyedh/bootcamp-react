import React from "react";
import { Navigate } from "react-router-dom";
import { LOCAL_EMAIL } from "../../settings/localVar";

export default function UserProtect({ children }) {
    if (!localStorage.getItem(LOCAL_EMAIL)) { //kiểm tra xem có email trong localStorage không
        return (
            <>
                <Navigate to={"/login"} />
            </>
        )
    }

    return <>{children}</>;
}