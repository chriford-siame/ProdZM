import React from 'react'
import ProductCard from './Card'
import { FaSearch } from 'react-icons/fa'
import { Checkbox } from '../ui/checkbox'
import { Settings2 } from 'lucide-react'

export default function ProductList() {
  return (
    <React.Fragment>
      <div className='p-2 w-full shadow-md'>
        <div className='w-full flex justify-between'>
          <div className='flex'>
            <div className="px-2 items-top flex items-center space-x-2">
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="flex gap-2text-sm text-[15pt] text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <Settings2 size={25} />  Filter By:
                </label>
              </div>
            </div>

            <div className="border-l px-2 items-top flex items-center space-x-2">
              <Checkbox id="IDDate" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="IDDate"
                  className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Date
                </label>
              </div>
            </div>

            <div className="border-l px-2 items-top flex items-center space-x-2">
              <Checkbox id="IDOrders" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="IDOrders"
                  className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Orders
                </label>
              </div>
            </div>

            <div className="border-l px-2 items-top flex items-center space-x-2">
              <Checkbox id="IDPrice" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="IDPrice"
                  className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Price
                </label>
              </div>

            </div>
          </div>
          <div className='flex sm gap-0 pr-5'>
            <input type='text' className=' bg-[#ebe6e6] text-[10pt] active:border-gray-400 pr-10 rounded-md ml px-2 mr-4 py-0 mx-0' placeholder='Search products' />
            <button type='submit' className='text-white -ml-[50px] bg-gray-300 p-2 py-1 rounded-md rounded-l-none border-none'>
              <FaSearch className=' cursor-pointer' size={20} color='white' />
            </button>
          </div>
        </div>
      </div>
      <div className='container px-10 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xlg:grid-cols-5  gap-4'>
        <ProductCard />
        <ProductCard />
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
