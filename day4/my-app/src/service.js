import { API_KEY, getApiUser } from "./config";

export const getUsers = async(id) => {
    const url = getApiUser(id);
    const res = await fetch(url,{
        headers:{
            key: API_KEY,
        }
    });

    if (!res.ok){
        alert("Can not get list of user");
    }
    return res.json();
}

export const addUsers = async (payload) => {
    const url = getApiUser();
    const res = await fetch(url,{
        method: "POST",
        headers:{
            key: API_KEY,
        },
        body: JSON.stringify(payload),
    });

    if (!res.ok){
        alert("Can not add new user");
    }
    return getUsers();
}

export const updateUser = async(payload) => {
    const url = getApiUser(payload.id);
    const res = await fetch(url,{
        method: "PUT",
        headers:{
            key: API_KEY,
        },
        body: JSON.stringify(payload),
    });

    if (!res.ok){
        alert("Can not update user");
    }
    return getUsers();
}

export const deleteUser = async(id) => {
    const url = getApiUser(id);
    const res = await fetch(url,{
        method: "DELETE",
        headers:{
            key: API_KEY,
        },
    });

    if (!res.ok){
        alert("Can not delete user");
    }
    return getUsers();
}