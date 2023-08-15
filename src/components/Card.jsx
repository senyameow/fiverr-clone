import React from 'react'
import { Link } from 'react-router-dom'
import '../data'
 
const Card = ({item}) => {
  return (
    <Link to={`/gig/${item.id}`}>
        <div className='w-[242px] h-[343px] relative'>
            <img src={item.img} alt="" />
            <span className='absolute top-[40px] left-[10px] text-white font-[500] text-[20px]'>{item.desc}</span>
            <span className='absolute top-[10px] left-[10px] text-white font-[800] text-[20px]'>{item.title}</span>
        </div>
    </Link>
  )
}

export default Card