import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const submitHandler=(e)=>{
    e.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");

  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e);
        }}
        className='flex flex-col items-center justify-center'>
           <input 
           value={email}
           onChange={(e)=>{
            setEmail(e.target.value);
           }}
           required 
           className=' bg-transparent outline-none border-2 border-emerald-600 font-medium text-lg  rounded-full placeholder:text-gray-400 text-xl py-3 px-5' type="email" placeholder='Enter Your Email' />
           <input 
           value={password}
           onChange={(e)=>{
            setPassword(e.target.value);
           }}
           required 
           className=' bg-transparent outline-none border-2 border-emerald-600 rounded-full mt-3 placeholder:text-gray-400 text-xl py-3 px-5' type="password" placeholder='Enter password' />
           <button className='mt-5 text-white border-none outline-none bg-emerald-600 rounded-full placeholder:text-gray-400 text-xl py-3 px-5' >Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
