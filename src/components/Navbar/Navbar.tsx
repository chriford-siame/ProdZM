import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Sidebar } from '../Sidebar/Sidebar'
import { NavigationMenuDemo } from './Content'
import { Input } from '../ui/input'
import { FaCartArrowDown, FaBell, FaSearch } from 'react-icons/fa'
import ProfileDropDownMenu from './DropDownMenu'
import { Bell, ShoppingBasketIcon, ShoppingCart } from 'lucide-react'

export default function Navbar() {
    return (
        <React.Fragment>
            <div className='flex container justify-between bg-[#62C6FF] py-3'>
                <div className='flex items-center '>
                    <Sidebar />
                </div>
                <div className='hidden md:block lg:block xl:block pt-1'>
                    {NavigationMenuDemo()}
                </div>
                <div className='flex gap-10 -pl-20'>
                    <div className='flex gap-1 items-center'>
                        <div className='flex'>
                            <a className='flex' href="/product/cart">
                                <ShoppingCart fill='white' size={25} color='white' />
                                <div className='flex items-center justify-center self-start -ml-2 -mt-1 p-[2px] text-[7pt] rounded-full bg-red-500 text-white'>10+</div>
                            </a>
                        </div>
                        <a className='flex' href="/product/cart">
                            <Bell fill='white' className=' cursor-pointer' size={25} color='white' />
                            <div className='flex items-center justify-center self-start -ml-3 p-1 text-[6pt] rounded-full bg-red-500 text-white'></div>
                        </a>
                    </div>
                    <ProfileDropDownMenu />
                </div>
            </div>
        </React.Fragment>
    )
}
