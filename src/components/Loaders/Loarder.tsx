import { Loader } from 'lucide-react'
import React from 'react'

export default function CustomLoarder() {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='grid gap-2'>
                <Loader size={60} color='green' />
                {/* <p className=' text-center text-muted-foreground'>Loading...</p> */}
            </div>
        </div>
    )
}
