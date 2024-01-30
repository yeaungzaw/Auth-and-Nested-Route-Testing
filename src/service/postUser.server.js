import { api } from "./baseurl";

export const PostUserToServer = async (arg, form) => {
  try {
    const { data } = await api.post(arg, form);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
