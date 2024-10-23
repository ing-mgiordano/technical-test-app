import React from 'react'
import ProductList from '@/components/ProductList'

export const metadata = {
    title: "Products"
}

export default function Products() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
        <h1 className="p-4 text-2xl font-bold">Products</h1>
        <ProductList />
    </div>
  )
}
