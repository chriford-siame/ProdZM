import React from 'react'

import {
    MdDashboard,
    MdViewList,
    MdShoppingCart,
    MdHistory,
    MdBookmark,
    MdAccountCircle,
    MdSettings,
    MdMail,
} from 'react-icons/md'
import { Label } from "../ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "../ui/sheet"
import SidebarTriggerButton from './SidebarTriggerButton'
import { Button } from '../ui/button'

export function Sidebar() {
    return (
        <div className="grid grid-cols-2 gap-2">
            <Sheet>
                <SidebarTriggerButton />
                <SheetContent side={'left'}>
                    <SheetHeader className='-mt-3 border-b border-opacity-[0.3]'>
                        <SheetTitle className='text-2xl pl-4 text-cyan-400'>
                            <a href="/">
                                ProdZM
                            </a>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                            <a href='/signup' className="flex justify-start gap-2">
                                <MdDashboard size={20} className='text-gray-700' /> <span className='-mt-[2px]'>Dashboard</span>
                            </a>
                        </a>
                        <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                            <div className="flex justify-start gap-2">
                                <MdViewList size={20} className='text-gray-700' /> <span className='-mt-[2px]'>Products</span>
                            </div>
                        </a>
                        <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                            <div className="flex justify-start gap-2">
                                <MdShoppingCart size={20} className='text-gray-700' /> <span className='-mt-[2px]'>My Cart</span>
                            </div>
                        </a>
                        <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                            <div className="flex justify-start gap-2">
                                <MdHistory size={20} className='text-gray-700' /> <span className='-mt-[2px]'>History</span>
                            </div>
                        </a>
                        <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                            <div className="flex justify-start gap-2">
                                <MdBookmark size={20} className='text-gray-700' /> <span className='-mt-[2px]'>My Orders</span>
                            </div>
                        </a>
                        <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                            <div className="flex justify-start gap-2">
                                <MdAccountCircle size={20} className='text-gray-700' /> <span className='-mt-[2px]'>Account</span>
                            </div>
                        </a>
                        <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                            <div className="flex justify-start gap-2">
                                <MdSettings size={20} className='text-gray-700' /> <span className='-mt-[2px]'>Settings</span>
                            </div>
                        </a>
                        <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                            <div className="flex justify-start gap-2">
                                <MdMail size={20} className='text-gray-700' /> <span className='-mt-[2px]'>Customer care</span>
                            </div>
                        </a>
                    </div>
                    <SheetFooter>
                        <SheetClose className='flex w-full justify-center' asChild>
                            <Button type="submit" className=' hover:text-white hover:font-bold'>Logout</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

