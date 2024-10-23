"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'

export default function RegisterPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            })
            const data = await res.json();
            if (res.ok) {
                setMessage(data.message)
                setTimeout(() => {
                  setMessage(null)
                  router.push("/login")
                }, 3000)
              } else {
                setErrorMessage(data.error)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 2000)
              }
        } catch (error) {
            console.error('Error', error)
        }
    }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-900 text-black dark:text-white">
        <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
           <h2 className="mb-4 text-2xl text-blue-600">Register</h2> 
           
           {message && (
            <div className="p-2 mb-4 text-green-700 bg-green-200 rounded">
                {message}
            </div>
            )}

            {errorMessage && (
            <div className="p-2 mb-4 text-red-700 bg-red-200 rounded">
                {errorMessage}
            </div>
            )}

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
            <Button>
                Register
            </Button>
        </form>      
    </div>
  )
}
