"use client"

import React from 'react'
import Card from './ui/Card'
import Button from './ui/Button'
import Link from 'next/link'

export default function ProductCard({ product }) {

  return (
    <Card className="h-full p-4 bg-white dark:bg-gray-700 text-black dark:text-white rounded shadow">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded" />
        <h2 className='mt-2 text-base text-gray-900 font-bold'>{product.title}</h2>
        <p className='mt-1 text-gray-600 dark:text-gray-300'>€ {product.price}</p>
        <Link href={`/products/${product.id}`}>
            <Button>Show Details</Button>
        </Link>
    </Card>
  )
}
