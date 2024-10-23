import React from 'react'
import Chart from './components/Chart'

export const metadata = {
  title: "Dashboard"
}

export default function Dashboard() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Chart />
    </div>
  )
}
