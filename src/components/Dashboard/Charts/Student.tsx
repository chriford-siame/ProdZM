import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function StudentBarChart({ data }: any) {
    return (
        <div>
            <Bar  data={data}/>
        </div>
    )
}
