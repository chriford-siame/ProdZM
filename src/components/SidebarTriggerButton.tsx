import React from 'react'
import { Button } from './ui/button'
import { SheetTrigger } from './ui/sheet'

export default function SidebarTriggerButton() {
    return (

        <SheetTrigger asChild>
            <Button variant="outline">left</Button>
        </SheetTrigger>
    )
}
