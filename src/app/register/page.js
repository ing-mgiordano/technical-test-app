"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        })
        if(res.ok) {
            router.push("/login")
        }
    }

  return (
    <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
           <h2 className="mb-4 text-2xl text-blue-600">Register</h2> 
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
                Register
            </button>
        </form>      
    </div>
  )
}
