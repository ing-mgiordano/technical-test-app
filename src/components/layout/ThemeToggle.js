"use client"

import React from 'react'
import { useTheme } from '@/app/context/ThemeContext'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-700 peer-checked:bg-blue-600 transition-colors duration-300"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {theme === "light" ? "Light" : "Dark"}
      </span>
    </label>
  )
}
