import React from 'react'
import Feature from './Feature'

const Features = () => {
  return (
    <div className='bg-[#f1fdf7] p-10'>
        <div className='container mx-auto my-[3rem] flex items-center justify-center lg:flex-row flex-col lg:gap-0 gap-10'>
            <div className='w-[100%] lg:max-w-[600px] flex-1'>
                <h2 className='text-slate-900 font-bold text-[2rem] mb-5'>The best part? Everything.</h2>
                <div className='flex flex-col gap-5'>
                    <Feature title={'Stick to your budget'} text={'Find the right service for every price point. No hourly rates, just project-based pricing.'} />
                    <Feature title={'Get quality work done quickly'} text={'Hand your project over to a talented freelancer in minutes, get long-lasting results.'} />
                    <Feature title={`Pay when you're happy`} text={'Upfront quotes mean no surprises. Payments only get released when you approve.'} />
                    <Feature title={'Count on 24/7 support'} text={'Our round-the-clock support team is available to help anytime, anywhere.'} />
                </div>
            </div>
            <div className='flex-1'>
                <video src="./img/coding.mp4" controls className='w-full h-[400px]'></video>
            </div>
        </div>
    </div>
  )
}

export default Features