import React from 'react'
import {Link} from 'react-router-dom'

const Skill = ({key, img, title}) => {
  return (
    <Link to={'/'} className='skill'>
        <div key={key} className='flex flex-col justify-center items-center gap-2 cursor-pointer'>
            <img src={img} alt="" className='w-[40px] h-[40px]' />
            <div className='w-[50px] h-[1.5px] bg-gray-400 animated bord'></div>
            <p className='text-slate-800 text-[1rem]'>{title}</p>
        </div>
    </Link>
  )
}

export default Skill