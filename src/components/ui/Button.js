"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Button({ children, onClick }) {
  return (
    <motion.button
        whileHover={{ scale: 1.05 }}
        className=" w-full px-4 py-2 text-white bg-blue-500 rounded"
        onClick={onClick}
    >
        {children}
    </motion.button>
  )
}
