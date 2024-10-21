"use client";

import React, { useState } from 'react'
import { signIn } from "next-auth/react"

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault
    const res = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/dashboard"
    })
  }
  
  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
        <h2 className="mb-4 text-2xl text-blue-600">Login</h2>
        <input 
          type='email'
          placeholder='Email'
          className='w-full p-2 mb-2 border text-slate-950'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type='password'
          placeholder='Password'
          className='w-full p-2 mb-2 border text-slate-950'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='w-full p-2 text-white bg-blue-500'
        >
          Sign in to account
        </button>
      </form>
    </div>
  )
}
