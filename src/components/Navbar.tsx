import React from 'react'
import { FaBars } from 'react-icons/fa'
import SidebarTriggerButton from './Sidebar/SidebarTriggerButton'
import { Sidebar } from './Sidebar/Sidebar'

export default function Navbar() {
    return (
        <React.Fragment>
            <div className='flex container justify-between bg-[#62C6FF] py-3'>
                <div className='flex items-center '>
                    <Sidebar />
                </div>
                <div className='sm:visible lg:visible md:visible pt-2'>
                    <div className='flex justify-between items-center text-white gap-8'>
                        <div>
                            <a href="#" className='hover:font-bold'>Category</a>
                        </div>
                        <div>
                            <a href="#" className='hover:font-bold'>FAQs</a>
                        </div>
                        <div>
                            <a href="#" className='hover:font-bold'>About us</a>
                        </div>
                        <div>
                            <a href="#" className='hover:font-bold'>Contact us</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='rounded-full w-10 h-10' src={require('src/assets/images/logo.jpg')} alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}
