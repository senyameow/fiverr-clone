import React from 'react'
import Social from './Social'
import { SiTwitter } from 'react-icons/si'
import {FaPatreon} from 'react-icons/fa'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {TfiWorld} from 'react-icons/tfi'
import {FaEuroSign} from 'react-icons/fa'
import { useContext } from 'react'
import { Context } from '../context/ContextProvider'

const FooterBottom = () => {

    const {currency, setCurrency, setCurrencyCounter, currencyCounter, currencies} = useContext(Context)
    
  return (
    <div className='py-[2rem] container ms-auto flex items-center justify-between w-full border-t-2 border-gray-200 my-[2rem]'>
        <div className='flex items-center'>
            <svg width="91" height="27" viewBox="0 0 91 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#7A7D85"><path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#7A7D85"><path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path></g></svg>
            <span className='text-[#b5b6ba] text-[.9rem] px-5 py-2'>© Fiverr International Ltd. 2023</span>
        </div>
        <div className='flex flex-row items-center gap-10'>
            <div className='flex items-center gap-3 flex-1'>
                <Social social={<SiTwitter size={24} />} />
                <Social social={<FaFacebook size={24} />} />
                <Social social={<BsLinkedin size={24} />} />
                <Social social={<FaPatreon size={24} />} />
                <Social social={<BsInstagram size={24} />} />
            </div>
            <div className='flex justify-between flex-1 gap-2'>
                <div className='flex flex-row items-center gap-2 text-[.8rem] text-[#74767e] cursor-pointer hover:bg-gray-300 min-w-[50px] min-h-[50px] px-2 rounded-full'>
                    <TfiWorld size={20} />
                    <span>English</span>
                </div>
                <div onClick={() => {
                    if (currencyCounter < 2) {
                        setCurrencyCounter(currencyCounter + 1)
                        setCurrency(currencies[currencyCounter])
                    } else {
                        setCurrencyCounter(0)
                        setCurrency(currencies[currencyCounter])
                    }
                    
                    console.log(currencyCounter)
                }} className='flex flex-row items-center gap-1 text-[.8rem] text-[#74767e] cursor-pointer hover:bg-gray-300 min-w-[70px] max-w-[100px] min-h-[40px] px-2 rounded-full'>
                    {
                    <>{currency.icon}
                    <span>{currency.name}</span></>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterBottom