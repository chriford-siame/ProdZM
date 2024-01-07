import React from 'react'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
    return (
        <React.Fragment>
            <div className='flex container justify-between bg-[#62C6FF] py-3'>
                <div className='flex items-center '>
                    <FaBars size={30} color='white' />
                </div>
                <div>
                    <img className='rounded-full w-10 h-10' src={require('src/assets/images/logo.jpg')} alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}
