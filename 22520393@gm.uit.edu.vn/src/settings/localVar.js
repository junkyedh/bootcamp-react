export const LOCAL_EMAIL = "email";

// http : 80
// https: 443
export const BE_ENPOINT = "https://mock.reactlms.com/";

export const getApiUser = (id) => {
  return "https://mock.reactlms.com/user/" + (id ? `?id=${id}` : "");
};
