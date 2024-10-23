"use client"

import React from 'react'
import ProductCard from './ProductCard'
import useFetchData from '@/hooks/useFetchData/useFetchData'
import { FixedSizeGrid as Grid } from 'react-window'

export default function ProductList() {

    const { data: products, hasError, isLoading} = useFetchData("https://fakestoreapi.com/products")

    if(hasError) return <div>Something went wrong.</div>
    if(isLoading) return <div>Loading...</div>
    
    const columnCount = 3
    const itemHeight = 400
    const itemWidth = 400

  return (
    <Grid
      columnCount={3}
      columnWidth={itemWidth}
      height={900}
      rowCount={Math.ceil(products.length / columnCount)}
      rowHeight={itemHeight}
      width={1250}
    >
      {({ columnIndex, rowIndex, style }) => {
          const productIndex = rowIndex * columnCount + columnIndex
          const product = products[productIndex]

          if (!product) return null

          return (
            <div style={style} className="p-2">
              <ProductCard product={product} />
            </div>
          )
        }}
    </Grid>
  )
}
