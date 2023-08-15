import React from 'react'
import { AICards } from '../../data'
import {AiFillStar} from 'react-icons/ai'
import Slide from '../Slide'
import CardSlider from '../Cards/CardSlider'
import Review from './Review'
import Divider from '../Divider'
import { Link } from 'react-router-dom'
import Level from '../levels/Level'
import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'
import TableHeader from './TableHeader'
import TR from './TR'
import GigRight from './GigRight'
import MSGSeller from './MSGSeller'


const GigBody = ({id}) => {

    const {currency} = useContext(Context)

    

    const gig = AICards.filter(card => card.id === id)[0] //ЭТО НАЙС! МЫ СЕБЯ НАШЛИ

  return (
    <>
    <div className='flex flex-row justify-between w-full gap-5 mb-10'>
        <div className='/left/ flex flex-[2] flex-col gap-5 pr-[4rem]'>
            <h1 className='font-bold text-[1.2rem]'>{gig.desc}</h1>
            <div className='flex flex-row gap-2 items-center'>
                <img src={gig.seller.pfp} alt="" className='w-[64px] h-[64px] rounded-full' />
                <div className='flex flex-col justify-center h-full'>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='text-slate-800 font-semibold text-[1.1rem]'>{gig.seller.name}</span>
                        <span className='text-slate-500 font-semibold text-[1rem]'>{gig.seller.id}</span>
                    </div>
                    <div className='flex flex-row items-center justify-between gap-3'>
                        <div className='flex flex-row items-center gap-1'>
                            <AiFillStar size={24} />
                            <span className='text-slate-800 text-bold'>{gig.raiting}</span>
                            <span className='text-slate-500 underline'>
                                {`(${gig.bought})`}
                            </span>
                        </div>
                        <Divider />
                        <span className='text-slate-500 text-[.89rem]'>{gig.seller.ordersInQ} Orders in Queue</span>
                    </div>

                </div>
                
            </div>
            <div className='w-[88%] h-fit mb-5'>
                <Slide slidesToShow={1} arrowsScroll={1}>
                    {gig.imgs.map(img => (
                        <CardSlider img={img} id={id} heart={false} />
                    ))}
                </Slide>
            </div>
            <div className='flex flex-row w-full justify-between text-slate-800 items-center'>
                <h3 className='font-semibold text-[1.5rem]'>What people loved about this seller</h3>
                <span className='text-[1.1rem] hover:underline cursor-pointer'>See all reviews</span>
            </div>
            <div className='hovered-arrows border mb-10'>
            <Slide slidesToShow={1} arrowsScroll={1}>
                {gig.reviews.map(review => (
                    <Review {...review} />
                ))}
            </Slide>
            </div>
            <div className='/about/ flex flex-col gap-6 text-[#62646a]'>
                <h2 className='text-slate-800 font-bold text-[1.7rem]'>About this gig</h2>
                <div className='bg-amber-100 text-center font-semibold'>
                    <span className='w-fit'>
                        {gig.gig.line1}
                    </span>
                </div>
                <span className='text-slate-600 font-semibold'>BRAND NEW CONTENT JUST ADDED!</span>
                
                <span>{gig.gig.new1}</span>
                <span>{gig.gig.new2}</span>
                
                <span className='font-semibold bg-amber-100 w-fit'>⭐ Prompt categories include:</span>
                <ul className='list-disc'>
                    {gig.gig.categories.map(category => (
                        <li>{category}</li>
                    ))}
                </ul>
                <div></div>
                <ul className='list-disc odd'>
                    {gig.gig.features.map(feature => (
                        <li>{feature}</li>
                    ))}
                </ul>
                <hr />
                <div className='w-[60%] flex flex-row justify-between mb-10'>
                        <div className='/left/ flex flex-col gap-2'>
                            <span className='text-slate-400'>Expertise</span>
                            <span className='max-w-[60%]'>
                            {gig.gig.expertise.map(line => (
                                <span className='text-slate-700'>{`${line}, `}</span>
                            ))}
                            </span>
                            
                        </div>
                        <div>
                            <div className='/right/ flex flex-col gap-2'>
                                <span className='text-slate-400'>AI Engine</span>
                                <span className=''>
                                    {gig.gig['AI Engine'].map(line => (
                                        <span className='text-slate-700'>{`${line}, `}</span>
                                    ))}
                                </span>
                            </div>
                        </div>
                </div>
                <div className='/about the seller/ flex flex-col gap-4 mb-10'>
                    <span className='font-semibold text-slate-800 text-[1.5rem]'  id='contactMe'>About the seller</span>
                    <div className='flex flex-row items-center gap-5'>
                        <div className='relative'>
                            <img src={gig.seller.pfp} alt="" className='w-[96px] h-[96px] rounded-full ' />
                            <div className='absolute bottom-0 right-0'>
                                <Level level={gig.seller.level} />
                            </div>
                        </div>

                        <div className='flex justify-around flex-col justify-center'>
                            <div className='flex flex-row gap-2 items-center'>
                                <span className='text-slate-800 font-semibold text-[1.1rem]'>{gig.seller.name}</span>
                                <span className='text-slate-500'>{gig.seller.id}</span>
                            </div>
                            <span className='text-slate-500'>{gig.seller.name}</span>
                            <div className='flex flex-row gap-1 items-center'>
                                <AiFillStar size={20} className='text-slate-800' />
                                <span className='text-slate-800 font-bold'>{gig.seller.raiting}</span>
                                <span className='text-slate-500 underline'>{`(${gig.seller.bought})`}</span>
                            </div>
                        </div>
                    </div>
                    <button id='packages' className='animated-half px-4 py-2 text-[.9rem] text-gray-500 bg-transparent font-semibold hover:text-white hover:bg-gray-500 border border-black hover:border-gray-500 rounded-md w-fit'>Contact me</button>
                </div>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table
                            
                            class="min-w-full border text-center text-sm font-light dark:border-neutral-500 text-[#74767e] tableAI">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                <th
                                    scope="col"
                                    class="border-r px-10 py-4 dark:border-neutral-500">
                                    Package
                                </th>
                                {gig.gig.packages.map((p, ind) => (
                                    <TableHeader gig={gig} id={ind} />
                                ))}
                                
                                </tr>
                            </thead>

                            
                            <tbody>
                                {gig.gig.trs.map((tr, ind) => (
                                    <TR tr={tr} gig={gig} ind={ind} />
                                ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='/right/ flex-[1.5] flex flex-col gap-3'>
            <GigRight gig={gig} />
        </div>
        
    </div>
    
    </>
  )
}

export default GigBody