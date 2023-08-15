import React from 'react'
import { Link } from 'react-router-dom'

const Service = ({children}) => {
  return (
    <Link to={'/'} className='p-2 text-slate-600 rounded-full flex justify-center items-center bg-gray-200 py-1'>
        <span className='link relative'>{children}</span>
    </Link>
  )
}

export default Service