"use client";

import React, { useState } from 'react'
import { signIn } from "next-auth/react"
import Button from '@/components/ui/Button'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/products"
    })
  }
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-900 text-black dark:text-white">
      <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
        <h2 className="mb-4 text-2xl text-blue-600">Login</h2>
        <input 
          type='email'
          placeholder='Email'
          className='w-full p-2 mb-2 border bg-gray-100 dark:bg-gray-700'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type='password'
          placeholder='Password'
          className='w-full p-2 mb-2 border bg-gray-100 dark:bg-gray-700'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          Sign in to account
        </button>
      </form>
    </div>
  )
}
