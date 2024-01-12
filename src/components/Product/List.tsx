import React from 'react'
import ProductCard from './Card'

export default function ProductList() {
  return (
    <React.Fragment>
      {/* <Herosection /> */}
      <div className=' container px-10 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xlg:grid-cols-5  gap-4'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </React.Fragment>
  )
}
