import React from 'react'


const Feature = ({title, text}) => {
  return (
    <div className='lg:max-w-[450px] max-w-full'>
        <div className='flex flex-row items-center gap-3 mb-2'>
            <img src='./img/check.png' alt="" className='inline' />
            <h3 className='text-slate-800 inline font-bold text-[1.2rem]'>{title}</h3>
        </div>
        <p className='text-[#62646a]'>{text}</p>
    </div>
  )
}

export default Feature