import { BE_ENPOINT } from "../../../settings/localVar";

const KEY = "junkye";
const HEADERS = {
    "Content-Type": "application/json", //loai du lieu gui di
    accept: "application/json", //dinh dang du lieu tra ve
    key: KEY,
}

export const get = async(uri, onSuccess, onFail)=> {
    const res = await fetch(BE_ENPOINT + uri,{
        headers: HEADERS
    });

    if (!res.ok){
        onFail();
        return;
    }

    const data = await res.json();
    onSuccess(data);
}

export const post = async (uri, reqData, onSuccess, onFail)=> {
    const res = await fetch(BE_ENPOINT + uri,{
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify(reqData),
    });

    if (!res.ok){
        onFail();
        return;
    }

    const data = await res.json();
    onSuccess(data);
}