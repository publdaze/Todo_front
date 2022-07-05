import React, {
  useState,
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

import authAPI, { LoginResponse } from "API/api";

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    authAPI.signIn(loginInfo).then((data: LoginResponse) => {
      if (data?.accessToken !== undefined) {
        console.log("login 성공");
        localStorage.setItem("token", data.accessToken);
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
        alert(
          "아이디 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요."
        );
      }
    });
  };

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  return (
    <div className="flex justify-center">
      <div className="border rounded-md shadow-md shadow-blue-100 bg-blue-50 py-16 px-4 w-full lg:w-2/3 h-full">
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
      </div>
    </div>
  );
};

export default SignIn;
