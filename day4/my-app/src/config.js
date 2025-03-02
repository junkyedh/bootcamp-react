export const getApiUser = (id) => {
    return "https://mock.reactlms.com/user/" + (id? `?id=${id}` : "");

}

export const API_KEY = "1234";
