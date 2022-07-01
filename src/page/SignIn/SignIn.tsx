import React from "react";

const SignIn = () => {
  return (
    <div className="mt-8 space-y-8">
      <div className="space-y-4">
        <div>
          <input
            id="id"
            name="loginId"
            type="text"
            required
            className="relative block w-full px-3 py-4 focus:bg-gray-200 border rounded-md border-gray-300 focus:outline-none placeholder-gray-500"
            placeholder="아이디"
            onChange={() => {}}
          />
        </div>

        <div>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="relative block w-full px-3 py-4 focus:bg-gray-200 border rounded-md border-gray-300 focus:outline-none placeholder-gray-500"
            placeholder="비밀번호"
            onChange={() => {}}
            onKeyPress={() => {}}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="relative flex justify-center w-full px-4 py-4 bg-blue-400 hover:bg-blue-500 border rounded-lg border-transparent font-medium text-white"
          onClick={() => {}}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default SignIn;
