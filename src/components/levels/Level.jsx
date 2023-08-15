import React from 'react'
import { Link } from 'react-router-dom'
import {MdAccessibilityNew} from 'react-icons/md'

const Level = ({level, size='40', textS='12'}) => {
  return (
    <Link to={'/levels'} className={`text-white text-[${textS}px] flex justify-center items-center w-[${size}px] h-[${size}px] rounded-full ${level === 'level two' && 'bg-gradient-to-r from-violet-500 to-fuchsia-500'} ${level === 'level one' && 'bg-gradient-to-r from-cyan-500 to-blue-500'} ${level === 'new' && 'bg-gradient-to-r from-black to-gray-500'} ${level === 'top' && 'bg-gradient-to-r from-amber-400 to-amber-500'} `}>
        {level === 'new' ? <MdAccessibilityNew size={Number(size)} /> : <span className='text-center leading-3 leading-tight'>{level}</span>}

    </Link>
  )
}

export default Level