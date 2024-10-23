"use client"

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import useFetchData from '@/hooks/useFetchData/useFetchData'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

export default function Chart() {
  const { data: products, hasError, isLoading } = useFetchData("https://fakestoreapi.com/products")

  if(hasError) return <div>Something went wrong.</div>
  if(isLoading) return <div>Loading...</div>

  const categories = [...new Set(products.map((p) => p.category))]
  const categoryCounts = categories.map(
    (category) => products.filter((p) => p.category === category).length
  )
  console.log(categories)

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Productos por Categoría",
        data: categoryCounts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="flex justify-center">
        <div  className="max-w-xl w-full p-4 mt-4 bg-white dark:bg-gray-900 rounded shadow" >
            <Doughnut data={chartData} /> 
        </div>
    </div>
  )
}