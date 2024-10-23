"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Card({ children }) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='p-4 bg-white rounded shadow'
    >
        {children}
    </motion.div>
  )
}
