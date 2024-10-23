"use client"

import React from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
      <div className="text-xl font-bold">
        <Link href="/">My E-Commerce</Link>
      </div>
      <nav>
        <Link href="/products" className="mx-2">Products</Link>
        <Link href="/dashboard" className="mx-2">Dashboard</Link>
      </nav>
      <ThemeToggle />
    </header>
  )
}
