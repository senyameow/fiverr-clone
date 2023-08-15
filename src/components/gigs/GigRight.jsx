import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'
import GigRightButtonPackage from './GigRightButtonPackage'
import {BsCheckLg} from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {BsLightningChargeFill} from 'react-icons/bs'


const GigRight = ({gig}) => {

    const {currency} = useContext(Context)

    // const price = Math.round(gig.gig.packages.price * currency.mult * 100) / 100

    const [pName, setPName ] = useState('Basic')
    
    const [currentPackage, setCurrentPackage] = useState(gig.gig.packages[0])

    const [bFocused, setBFocused] = useState(false)

  return (
    <div className='sticky top-[20%] flex flex-col w-full gap-4'>
        <div className='w-full border /table/'>
                <div className='flex flex-row'>
                    {gig.gig.packages.map((p, ind) => (
                        <GigRightButtonPackage setPName={setPName} currentPackage={currentPackage} setCurrentPackage={setCurrentPackage} gig={gig} p={p} ind={ind} bFocused={bFocused} setBFocused={setBFocused} />
                    ))}
                </div>
                <div className='px-10 flex flex-col gap-5 text-slate-500'>

                {pName === 'Basic' && <div className='py-4 flex flex-col gap-5'>
                    <div className='flex flex-row w-full justify-between text-slate-800'>
                        <span className='font-semibold'>{currentPackage.name}</span>
                        <span className='font-semibold flex items-center'>{currency.icon}{Math.round(currentPackage.price * currency.mult * 100 ) / 100}</span>
                        
                        
                    </div>
                    <span className='text-[.9rem]'>{currentPackage.desc}</span>
                </div>}
                {pName === 'Standard' && <div className='py-4 flex flex-col gap-5'>
                    <div className='flex flex-row w-full justify-between text-slate-800'>
                        <span className='font-semibold'>{currentPackage.name}</span>
                        <span className='font-semibold flex items-center'>{currency.icon}{Math.round(currentPackage.price * currency.mult * 100 ) / 100}</span>
                        
                        
                    </div>
                    <span className='text-[.9rem]'>{currentPackage.desc}</span>
                </div>}
                {pName === 'Premium' && <div className='py-4 flex flex-col gap-5'>
                    <div className='flex flex-row w-full justify-between text-slate-800'>
                        <span className='font-semibold'>{currentPackage.name}</span>
                        <span className='font-semibold flex items-center'>
                            {currency.icon}{Math.round(currentPackage.price * currency.mult * 100 ) / 100}
                        </span>
                        
                        
                    </div>
                    <span className='text-[.9rem]'>{currentPackage.desc}</span>
                    
                    
                
                </div>}

                    <ul>
                        {currentPackage.tr.map(r => (
                            <div className='flex flex-row gap-2 font-bold text-[#95979d]'>
                                { r.bool != null && <>
                                    <span>{r.bool === true ? <BsCheckLg size={24} className='text-slate-800'/> : <BsCheckLg size={24} className='text-slate-300'/>}</span>
                                    <span className='font-normal'>{r.name}</span>
                                </>}
                            </div>
                        ))}
                    </ul>
                    <div className='relative'>
                        <button className='text-white bg-black w-full py-2 rounded-lg font-semibold tracking-widest hover:opacity-80'>Continue</button>
                        <AiOutlineArrowRight className='absolute top-[50%] right-[5%] -translate-y-2/4 text-white' size={24} />
                    </div>
                            <div className='w-full flex justify-center items-center mb-5'>
                                <AnchorLink href='#packages'><span className='text-center text-[.9rem] text-slate-800 cursor-pointer p-1'>Compare packages</span></AnchorLink>
                            </div>



                </div>

        </div>

        <div className='flex justify-center items-center w-full bg-gray-100'>
            <AnchorLink href='#contactMe' className='w-full p-5'>
                <button className='bg-transparent border border-black text-slate-500 font-semibold w-full py-2 px-1 rounded-lg hover:text-white hover:bg-gray-600 hover:border-gray-500 animated-half'>Contact me</button>
            </AnchorLink>
        </div>

        <div className='border p-3'>
            <div className='flex items-center flex-row gap-4'>
                <BsLightningChargeFill size={24} className='text-slate-800 font-bold' />
                <div className='flex flex-col justify-between h-full text-[.8rem]'>
                    <span className='text-slate-700 font-semibold'>Highly responsive!</span>
                    <span className='text-slate-700 font-normal'>Known for exceptionally quick replies!</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GigRight