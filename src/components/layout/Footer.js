import React from 'react'

export default function Footer() {
  return (
      <footer className="p-4 text-center bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
          © {new Date().getFullYear()} My E-Commerce. All rights reserved.
      </footer>
  )
}
