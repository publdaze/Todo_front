import axios from "axios";

async function signIn({ username, password }) {
  const options = {
    method: "POST",
    url: "/auth/login",
    data: {
      username,
      password,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export default {
  signIn,
};
