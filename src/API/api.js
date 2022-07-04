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

async function refresh({ username, password, token }) {
  const options = {
    method: "GET",
    url: "/auth/refresh",
    data: {
      username,
      password,
    },
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function profile({ token }) {
  const options = {
    method: "GET",
    url: "/profile",
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

// eslint-disable-next-line
export default {
  signIn,
  profile,
  refresh,
};
