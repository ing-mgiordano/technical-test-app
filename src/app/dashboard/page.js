"use client";

import React from 'react'
import useFetchData from '@/hooks/useFetchData/useFetchData'

export default function Dashboard() {

    const url = "https://disease.sh/v3/covid-19/vaccine/coverage/countries"
    const { data, isLoading, hasError} = useFetchData(url)
    if(isLoading) return <div>
        Cargando...
    </div>
    if (hasError) return <div>
        Error
    </div>
  return (
    <div>
      <h1>dasboard</h1>
      <div>
        {data[0].country}
      </div>
      

    </div>
  )
}
