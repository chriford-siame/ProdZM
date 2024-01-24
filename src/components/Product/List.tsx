import React from 'react'
import ProductCard from './Card'
import { Checkbox } from '../ui/checkbox'
import {
  Grid3x3Icon,
  ListOrderedIcon,
  Search,
  Settings2
} from 'lucide-react'

export default function ProductList() {
  return (
    <React.Fragment>
      <div className='p-2 w-full shadow-md'>
        <div className=' w-full flex justify-between'>
          <div className="w-full md:flex lg:flex xl:flex justify-between">
            <div className='flex'>
              <div className="px-2 items-top flex items-center space-x-2">
                <div className="grid gap-1.5 leading-none">
                  <div
                    className="flex gap-2 text-md items-center text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <Settings2 size={25} />  Filter By:
                  </div>
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
            <div className='flex pr-5 border-t md:border-none lg:border-none xl:border-none mt-2 pt-2 lg:mt-auto xl:mt-auto md:mt-auto'>
              <input type='text' className=' invalid:border-pink-500 disabled:border-slate-200 border active:border-slate-300 sticky bg-[#ebe6e6] text-[10pt] focus:invalid:border-pink-500    pr-10 rounded-md ml px-2 mr-4 py-0 mx-0' placeholder='Search products' />
              <button type='submit' className='text-white hover:bg-[#7bcbd1] bg-[#b0caca] z-10 -ml-[50px] p-2 py-1 rounded-md rounded-l-none border-none'>
                <Search className='cursor-pointer' size={20} color='white' />
              </button>
              <div className='flex gap-2 items-center justify-center ml-5 pl-2 border-l'>
                <div className='bg-[#5ad8d8] rounded-md p-[2px]'>
                  <Grid3x3Icon className=' text-white cursor-pointer' size={20} />
                </div>
                <div className='bg-[#fff] hover:bg-[#5ad8d854] rounded-md p-[2px]'>
                  <ListOrderedIcon className=' cursor-pointer' size={20} color='gray' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container px-5 my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xlg:grid-cols-5  gap-4'>
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
