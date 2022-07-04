import React, { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import authAPI from "API/api";

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    authAPI.signIn(loginInfo).then((data: any) => {
      if (data?.accessToken !== undefined) {
        // NOTE 이렇게 처리하는 것 말고 더 좋은 방법이 없을 지..
        console.log("login 성공");
        localStorage.setItem("token", data?.accessToken);
        localStorage.setItem("username", loginInfo.username);
        localStorage.setItem("currentuser", loginInfo.username);
        navigate("/");
        /* authAPI
          .refresh({ ...loginInfo, token: localStorage.getItem("token") })
          .then((data: any) => {
            console.log(data);
            localStorage.setItem("token", data?.accessToken);
          }); */
      } else {
        console.log("login 실패");
      }
    });
  };

  return (
    <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <input
          id="username"
          name="username"
          type="text"
          required
          className="relative block w-full px-3 py-4 focus:bg-gray-200 border rounded-md border-gray-300 focus:outline-none placeholder-gray-500"
          placeholder="아이디"
          onChange={handleInputChange}
        />
        <input
          id="password"
          name="password"
          type="password"
          required
          className="relative block w-full px-3 py-4 focus:bg-gray-200 border rounded-md border-gray-300 focus:outline-none placeholder-gray-500"
          placeholder="비밀번호"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button
          type="submit"
          className="relative flex justify-center w-full px-4 py-4 bg-blue-400 hover:bg-blue-500 border rounded-lg border-transparent font-medium text-white"
        >
          로그인
        </button>
      </div>
    </form>
  );
};

export default SignIn;
