import React, { useState } from 'react'

export default function Dashboard() {
    const [userData, setUserData] = useState({
        label: 'User Analytics',
        labels: [
            2016,
            2017,
            2018,
            2019,
        ],
        data: [
            20,
            21,
            22,
            23,
        ],
    })
    return (
        <React.Fragment>
            <div className='flex h-screen w-screen justify-center items-center'>
                <p className='font-bold text-4xl'>Charts comming soon...</p>
            </div>
        </React.Fragment>
    )
}
