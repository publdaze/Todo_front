import React, { useState, ChangeEventHandler, FormEventHandler } from "react";

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({ loginId: "", password: "" });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(loginInfo);
  };

  return (
    <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <input
          id="id"
          name="loginId"
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
