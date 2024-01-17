import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Sidebar } from '../Sidebar/Sidebar'
import { NavigationMenuDemo } from './Content'
import { Input } from '../ui/input'
import { FaCartArrowDown, FaBell, FaSearch } from 'react-icons/fa'
import ProfileDropDownMenu from './DropDownMenu'

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
                            <div className='flex gap-0 pr-5'>
                                <input type='text' className=' text-[10pt] active:border-gray-400 pr-10 rounded-md ml px-2 mr-4 py-0 mx-0' placeholder='Search products' />
                                <button type='submit' className='text-white -ml-[50px] bg-gray-300 p-2 py-1 rounded-md rounded-l-none border-none'>
                                    <FaSearch className=' cursor-pointer' size={20} color='white' />
                                </button>
                            </div>
                            <a className='flex' href="/product/cart">
                                <FaCartArrowDown size={30} color='white' />
                                <div className='flex items-center justify-center self-start -ml-2 -mt-3 p-1 text-[8pt] rounded-full bg-red-500 text-white'>10+</div>
                            </a>
                        </div>
                        <a className='flex' href="/product/cart">
                            <FaBell className=' cursor-pointer' size={30} color='white' />
                            <div className='flex items-center justify-center self-start -ml-3 p-1 text-[8pt] rounded-full bg-red-500 text-white'></div>
                        </a>
                    </div>
                    <ProfileDropDownMenu />
                </div>
            </div>
        </React.Fragment>
    )
}
