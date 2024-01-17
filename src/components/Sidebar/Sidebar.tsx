import React from 'react'

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
import { 
    BookMarked,
    ClipboardList,
    FileQuestion,
    History,
    ListIcon,
    LogOut,
    LucideLayoutDashboard,
    Mail,
    Settings,
    ShoppingCart,
    User 
} from 'lucide-react'

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
                    <div className='overflow-y-scroll h-full '>

                        <div className="grid gap-4 py-4">
                            <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                                <a href='/dashboard' className="flex justify-start gap-2">
                                    <LucideLayoutDashboard size={20} className='text-gray-700' /> <span className='-mt-[2px]'>Dashboard</span>
                                </a>
                            </a>
                            <a href='/' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                                <div className="flex justify-start gap-2">
                                    <ListIcon size={20} className='text-gray-700' /> <span className='-mt-[2px]'>Products</span>
                                </div>
                            </a>
                            <a href='/product/cart' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                                <div className="flex justify-start gap-2">
                                    <ShoppingCart size={20} className='text-gray-700' /> <span className='-mt-[2px]'>My Cart</span>
                                </div>
                            </a>
                            <a href='/product/history' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                                <div className="flex justify-start gap-2">
                                    <History size={20} className='text-gray-700' /> <span className='-mt-[2px]'>History</span>
                                </div>
                            </a>
                            <a href='/product/orders' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                                <div className="flex justify-start gap-2">
                                    <BookMarked size={20} className='text-gray-700' /> <span className='-mt-[2px]'>My Orders</span>
                                </div>
                            </a>
                            <a href='/account/profile' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                                <div className="flex justify-start gap-2">
                                    <User size={20} className='text-gray-700' /> <span className='-mt-[2px]'>Account</span>
                                </div>
                            </a>
                            <a href='/account/settings' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                                <div className="flex justify-start gap-2">
                                    <Settings size={20} className='text-gray-700' /> <span className='-mt-[2px]'>Settings</span>
                                </div>
                            </a>
                            <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                                <div className="flex justify-start gap-2">
                                    <Mail size={20} className='text-gray-700' /> <span className='-mt-[2px]'>Contact us</span>
                                </div>
                            </a>
                            <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                                <div className="flex justify-start gap-2">
                                    <FileQuestion size={20} className='text-gray-700' /> <span className='-mt-[2px]'>About us</span>
                                </div>
                            </a>
                            <a href='#' className="flex rounded-sm pl-3 justify-start py-2 items-center gap-4 hover:text-blue-600 hover:font-bold hover:bg-blue-200">
                                <div className="flex justify-start gap-2">
                                    <ClipboardList size={20} className='text-gray-700' /> <span className='-mt-[2px]'>FAQs</span>
                                </div>
                            </a>
                        </div>
                        <SheetFooter>
                            <SheetClose className='flex w-full justify-center' asChild>
                                <Button type="submit" className=' hover:text-white hover:font-bold'>
                                    <LogOut size={20} className='text-gray-700 mr-2' />
                                    Logout
                                </Button>
                            </SheetClose>
                        </SheetFooter>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

