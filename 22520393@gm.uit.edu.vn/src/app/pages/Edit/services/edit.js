import { put } from "../../../modules/lib/httpHandle";

export const getApiUser = (id) => {
  return "https://mock.reactlms.com/user/" + (id ? `?id=${id}` : "");
};
export const API_KEY = "huynh";
export const updateUsers = async (payload, nav) => {
  const url = getApiUser(payload.id);
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      key: API_KEY,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    alert("Can not update new user");
  } else {
    nav("/");
  }
};
