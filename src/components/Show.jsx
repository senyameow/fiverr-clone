import React from 'react'
import SearchBar from './SearchBar'
import Button from './Button'

const Show = () => {
  return (
    <div className='bg-green-700 h-[550px] xl:h-fit xl:block flex justify-center items-center pt-[45px]'>
        <div className='max-w-[1400px] flex xl:flex-row justify-center items-center mx-auto container flex-col pl-5'>
            <div className='flex flex-col text-white xl:gap-2 gap-3'>
                <h1 className='font-bold text-[2.5rem] xl:text-left text-center'>Find the perfect <span className='italic font-normal'>freelance</span> services <br />
                for your business</h1>
                <SearchBar />
                <div className='flex flex-row gap-3 items-center '>
                    <span>Popular:</span>
                    <Button rounded={'full'} outlined={true} bc={'-white'} bw={'-2'} hover={'bg-white'}>Website Design</Button>
                    <Button rounded={'full'} outlined={true} bc={'-white'} bw={'-2'} hover={'bg-white'}>WordPress</Button>
                    <Button rounded={'full'} outlined={true} bc={'-white'} bw={'-2'} hover={'bg-white'}>Logo Design</Button>
                    <Button rounded={'full'} outlined={true} bc={'-white'} bw={'-2'} hover={'bg-white'}>AI Services</Button>
                </div>
            </div>
            <img src='./img/man.png' alt="" className='xl:block hidden' />
        </div>

    </div>
  )
}

export default Show