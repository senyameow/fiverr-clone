import React from 'react'
import Divider from '../Divider'
import { AiFillStar } from 'react-icons/ai'

const Review = ({id, from, username, pfp, ago, desc, flag, raiting}) => {
  return (
    <div className='w-full flex flex-row px-[3rem] py-[10px] gap-4 pl-[2rem]'>
        <img src={pfp} alt="pfp" className='w-[32px] h-[32px] rounded-full ' />
        <div className='flex-1 flex-col gap-3'>
            <div className='flex flex-row gap-2 items-center'>
                <span className='text-slate-800 font-semibold '>{username}</span>
                <img src={flag} alt="" className='w-[20px] h-[20px] ' />
                <span className='text-slate-500'>{from}</span>
                <Divider />
                <div className='flex items-center flex-row '>
                    {raiting === 5 && 
                    (
                        <div className='flex flex-row gap-1'>
                            <AiFillStar size={16} />
                            <AiFillStar size={16} />
                            <AiFillStar size={16} />
                            <AiFillStar size={16} />
                            <AiFillStar size={16} />
                            
                        </div>
                    )}
                    {raiting === 4 && (
                        <div className='flex flex-row gap-1'>
                            <AiFillStar size={16} />
                            <AiFillStar size={16} />
                            <AiFillStar size={16} />
                            <AiFillStar size={16} />
                        </div>
                    )}
                    {raiting === 3 && (
                        <div className='flex flex-row gap-1'>
                            <AiFillStar size={16} />
                            <AiFillStar size={16} />
                            <AiFillStar size={16} />

                        </div>
                    )}
                    {raiting === 2 && (
                        <div className='flex flex-row gap-1'>
                            <AiFillStar size={16} />
                            <AiFillStar size={16} />

                        </div>
                    )}
                    {raiting === 1 && (
                        <div className='flex flex-row gap-1'>
                            <AiFillStar size={16} />
 
                        </div>
                    )}
                    <h1 className='text-slate-800 font-bold text-[1.1rem] ml-2'>{raiting}</h1>
                </div>

                
            </div>
            <div className='dont-wrap text-slate-500 text-[1rem]'>
                {desc}
            </div>
            <div className='text-slate-400 text-[.9rem]'>
                {ago}
            </div>
        </div>
        
    </div>
  )
}

export default Review