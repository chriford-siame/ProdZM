import { MinusCircle, PenLineIcon, PlusCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip'
import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function ProductCartCard() {
  return (
    <Card className='flex'>
      {/* <a href='/product/13/detail' className='text-[11pt] md:text-[12pt] xl:text-[12pt] lg:text-[12pt] '>Watch</a> */}
      <div className='flex justify-center items-center ml-1.5'>
        <img className='w-20 h-22 rounded-lg' src={require('src/assets/images/product/tshirt-1.png')} alt="" />
      </div>
      <CardContent className='w-full pb-0 px-2 p-2'>
        <div className='flex justify-between px-1  text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
          <div>
            <p className='text-[13pt]'>{'axy axy axy axy axy axy axy axy'}</p>
            <p className='font-light'>white</p>
          </div>
          <PenLineIcon color='gray' size={20} className='cursor-pointer' />
        </div>
        <div className='flex justify-between px-1  text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
          <p>$2.09</p>
          <div className='flex gap-1'>
            <MinusCircle size={20} color='gray' className='cursor-pointer' />
            <p className='text-black'>2</p>
            <PlusCircle size={20} color='gray' className='cursor-pointer' />
          </div>
        </div>
        <div className='flex justify-between px-1 text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
          <p>Action:</p>
          <a className='mr-[4px] text-red-300 cursor-pointer'>remove</a>
        </div>
      </CardContent>
    </Card>
  )
}
