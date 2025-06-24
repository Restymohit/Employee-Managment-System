import React, { useState } from 'react';
import HeaderLayout from '../common/HeaderLayout';
import FooterLayout from '../common/FooterLayout';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] flex flex-col">
      <HeaderLayout />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="border-2 rounded-xl border-emerald-600 p-10 md:p-20 w-full max-w-md bg-[#1F1F1F]">
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <h2 className="text-center text-2xl text-white font-semibold mb-4">Login to TaskBoard</h2>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent outline-none border-2 border-emerald-600 text-white rounded-full placeholder:text-gray-400 text-lg py-3 px-5"
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-transparent outline-none border-2 border-emerald-600 text-white rounded-full placeholder:text-gray-400 text-lg py-3 px-5"
              type="password"
              placeholder="Enter Password"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-lg py-3 px-5 mt-2"
            >
              Log In
            </button>
          </form>
        </div>
      </main>
      <FooterLayout />
    </div>
  );
};

export default Login;
