import React from 'react'

const Social = ({social}) => {
  return (
    <div className='flex justify-center items-center w-[47px] h-[47px] rounded-full bg-white hover:bg-gray-200 animated-half cursor-pointer'>
        {social}
    </div>
  )
}

export default Social