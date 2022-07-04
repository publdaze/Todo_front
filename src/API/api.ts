import axios from "axios";

export type LoginResponse =  {
  accessToken:string
}

async function signIn({ username, password }: {username: string, password: string}) {
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
  } catch (error: any) {
    return error.response.data;
  }
}

async function refresh({ username, password, token }: {username: string, password: string, token: string}) {
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
  } catch (error: any) {
    return error.response.data;
  }
}

async function profile({ token }: {token: string}) {
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
  } catch (error: any) {
    return error.response.data;
  }
}

// eslint-disable-next-line
export default {
  signIn,
  profile,
  refresh,
};
