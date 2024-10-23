"use client"

import React from 'react'
import useFetchData from '@/hooks/useFetchData/useFetchData'
import Button from '@/components/ui/Button'

export default function ProductDetails({ params }) {
    const { id } = params
    const { data: product, hasError, isLoading} = useFetchData(`https://fakestoreapi.com/products/${id}`)

    if(hasError) return <div>Something went wrong.</div>
    if(isLoading) return <div>Loading...</div>


  return (
    <div className="flex justify-center p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className='max-w-xl w-full p-4'>
            <img src={product.image} alt={product.title} className="h-64 object-cover mx-auto"/>
            <h1 className="mt-4 text-2xl font-bold text-center">{product.title}</h1>
            <p className="mt-2 text-center">€ {product.price}</p>
            <p className="mt-4 text-justify">{product.description}</p>
            <div className="mt-6 flex justify-center">
                <Button>Add to Cart</Button>   
            </div>
        </div>
    </div>
  )
}
