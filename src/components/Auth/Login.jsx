import React, { useState } from 'react';


function Login() {

  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("email is", email)
    console.log("password is", password)

    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-950 p-20'>
        <form 
        onSubmit={(e)=>{
 submitHandler(e)
        }}
         className='flex flex-col items-center justify-center'>
          <input
          value={email} 
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required className=' text-white outline-none bg-transparent border-2 border-emerald-800 py-4 px-5 rounded-full placeholder:text-white' type="email" placeholder='Enter Your Email' />
          <input
          value={password} 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required className=' text-white outline-none bg-transparent border-2 mt-3 border-emerald-800 py-4 px-5 rounded-full placeholder:text-white' type="password" placeholder='Enter password' />
          <button className='text-white border-none outline-none bg-transparent border-2 border-emerald-800 py-3 px-5 rounded-full placeholder:text-white mt-7 hover:bg-emerald-900 w-full'>Login</button>
        </form>

      </div>
    
    </div>
  );
}

export default Login;
