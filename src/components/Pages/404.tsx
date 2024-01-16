import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className=' flex justify-center items-center h-screen text-3xl text-red-400'>
        <p>404 - <Link to={'/'} >Products Page</Link></p>
    </div>
  )
}
