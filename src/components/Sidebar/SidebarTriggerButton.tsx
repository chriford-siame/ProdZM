import React from 'react'
import { SheetTrigger } from '../ui/sheet'
import { FaBars } from 'react-icons/fa'

export default function SidebarTriggerButton() {
    return (
        <SheetTrigger asChild>
            <FaBars size={30} color='white' className=' cursor-pointer'/>
        </SheetTrigger>
    )
}
