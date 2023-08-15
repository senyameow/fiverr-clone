import React from 'react'
import Service from './Service'

const ExploreMore = () => {
  return (
    <div className='py-[3rem] container mx-auto flex justify-center items-center flex-col gap-10 border-y my-10'>
        <h1 className='text-slate-900 font-bold text-[2rem]'>Explore More AI Artists Services</h1>
        <div className='flex flex-row gap-3'>
            <Service>
                Dall-E Artists
            </Service>
            <Service>
                Stable Diffusion Artists
            </Service>
            <Service>
                Midjourney Artists
            </Service>
        </div>
    </div>
  )
}

export default ExploreMore