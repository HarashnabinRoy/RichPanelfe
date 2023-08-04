'use client'
import Link from "next/link";
import React,{ useState } from "react";



export default function Signin() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };


  return (
    <div className="bg-[#2B4C8C] flex min-h-screen justify-center items-center">
      <div className="flex bg-white rounded-2xl p-12 flex-col">
        <div className="flex justify-center mb-6 text-xl">Create Account</div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            className="w-[300px] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-10">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              value={rememberMe}
              onChange={(e) => setRememberMe(e.target.value)}
            />
            <span className="text-sm text-gray-700">Remember me</span>
          </label>
        </div>

        <Link href="plans">
          <button
            className="bg-[#2B4C8C] text-white px-4 py-2 w-full" 
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </Link>


        <div className="flex justify-center mt-6 text-xs">Already have an account?<Link href="login_app" className="ml-[4px] text-[#2B4C8C]">Login</Link></div>

      </div>
    </div>

  )
}