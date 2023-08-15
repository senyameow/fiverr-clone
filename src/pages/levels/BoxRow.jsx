import React from 'react'
import Level from '../../components/levels/Level'

const BoxRow = ({title, overview, get, level, levelN, requirements}) => {
  return (
    <div className='mx-auto relative border-box pt-[80px] pr-[120px] pb-[75px] pl-[130px] flex flex-row justify-between items-start border-y gap-[5rem]'>
        <div className='flex flex-row items-center gap-5 flex-1'>
            <Level level={level} size={'64'} textS='18' />
            <span className='text-black font-semibold text-[2rem]'>{title}</span>
        </div>
        <div className='/right/ flex flex-col justify-between text-gray-600 flex-[2] gap-[2rem]'>
            <div className='/overview/ flex flex-col justify-bewtween gap-5'>
                <span className='text-black font-semibold text-[1.1rem]'>Overview</span>
                <span>{overview}</span>
            </div>
            {requirements && 
            (<div className='flex flex-col gap-5'>
                {/* <span>To reach the Level {levelN} status, you need to meet the following requirements:</span> */}
                <ul className='list-disc'>
                    {requirements.map(r => (
                        <li>{r}</li>
                    ))}
                </ul>
            </div>)}
            <div className='/get/ flex flex-col justify-between gap-5'>
                <span className='text-black font-semibold'>You’ll get to:</span>
                <ul className='list-disc'>
                    {get.map(feature => (
                        <li>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default BoxRow