import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-red-600">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center p-20 gap-5"
        >
          <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
                
            }}
            required
            className="border-2 outline-none border-emerald-600 rounded-full py-3 text-xl px-5 placeholder:text-gray-300 "
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            required
            className="border-2 outline-none border-emerald-600 rounded-full py-3 text-xl px-5 placeholder:text-gray-400 "
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="active:bg-emerald-700 active:scale-95 border-none outline-none w-full bg-emerald-600 rounded-full py-2 px-8 placeholder:text-white mt-5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
