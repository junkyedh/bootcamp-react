import { get } from "../../../modules/lib/httpHandle";

export const getApiUser = (id) => {
  return "https://mock.reactlms.com/user/" + (id ? `?id=${id}` : "");
};
export const API_KEY = "huynh";
export const getUsers = async (id) => {
  const url = getApiUser(id);
  const res = await fetch(url, {
    headers: {
      key: API_KEY,
    },
  });

  if (!res.ok) {
    alert("Can not get list of user");
  }

  return res.json();
};

// export const getUsers = (id, onSuccess, onFail) => {
//   const url = id ? `user/${id}` : "user/";
//   get(
//     url,
//     (data) => {
//       onSuccess(data);
//     },
//     () => {
//       onFail();
//       alert("Can not get list of users");
//     }
//   );
// };
