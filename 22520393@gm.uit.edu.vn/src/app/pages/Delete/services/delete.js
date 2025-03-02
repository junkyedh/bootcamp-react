import { del } from "../../../modules/lib/httpHandle";

// export const deleteUsers = (id, onSuccess, onFail) => {
//   const url = `user/${id}`;
//   del(
//     url,
//     (data) => {
//       onSuccess(data);
//     },
//     () => {
//       onFail();
//       alert("Can not delete user");
//     }
//   );
// };

export const getApiUser = (id) => {
  return "https://mock.reactlms.com/user/" + (id ? `?id=${id}` : "");
};
export const API_KEY = "huynh";
export const deleteUsers = async (id, nav) => {
  const url = getApiUser(id);
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      key: API_KEY,
    },
  });

  if (!res.ok) {
    alert("Can not delete user");
  } else {
    nav("/");
  }
};
