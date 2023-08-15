import React, { useEffect } from 'react'
import { AICards } from '../data'
import GigCard from './GigCard'
import ExploreMore from './ExploreMore'
import {AiOutlineHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {AiFillPlayCircle} from 'react-icons/ai'
import { useContext } from 'react'
import { Context } from '../context/ContextProvider'
import Sorting from './Sorting'
import Toggle from './Toggle'

const GigCards = () => {

  const {videoClicked, setVideoClicked, online, newCards, favorites} = useContext(Context)

  const noScroll = () => {
    document.body.classList.toggle('overflow-y-hidden')
    
  }



  return (
    <>
    
    <div className='container mx-auto flex flex-col py-[3rem]'>


        <Link to={'/'} className='max-w-fit hover:bg-gray-300 animated rounded-full p-2'><AiOutlineHome size={25} /></Link>
        <h1 className='text-[2rem] font-bold'>AI Artists</h1>
        <div className='flex flex-row gap-3 items-center border-b-2 py-5'>
          <span className='text-[1rem] text-gray-500'>Explore the boundaries of art and technology with Fiverr's AI artists</span>
          <span className='text-[1rem] text-gray-300'>|</span>
          <div className=' border-b-2 flex items-center gap-2 cursor-pointer hover:bg-gray-300 animated p-2 py-1 rounded-full' onClick={() => {
            noScroll()
            setVideoClicked(true)
          }}>
            <AiFillPlayCircle size={16} />
            <span className='text-slate-800 font-normal'>How Fiverr Works</span>
          </div>
          
        </div>

          <div className='flex flex-row w-full justify-between items-center'>
          
        <Sorting />
        <Toggle>online sellers</Toggle>
          </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container mx-auto gap-10 py-[3rem]'>
            {online === true ? newCards.filter(card => card.seller.online === true).map(card => (
                <GigCard {...card} />
            )) : 
            newCards.map(card => (
              <GigCard {...card} />
            ))}
        </div>
        {newCards.length === 0 && <h1 className='text-[3rem] text-center font-bold'>Ooops.. we don't have such items for now</h1>}
        <ExploreMore />
    </div>
    {videoClicked && <>
    <div className='w-[100vw] h-[100vh] absolute top-0' onClick={() => {
      setVideoClicked(false)
      noScroll()
    }} >
      <div className='w-[100vw] h-[100vh] absolute top-0 bg-black z-[10] opacity-[.4]'></div>
      <video className="absolute opacity-[1] top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 z-[15]" onClick={() => {
        setVideoClicked(true)
      }} controls preload="metadata" crossorigin="anonymous"><source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/ab0907217c9f9a2c1d2eee677beb7619-1626082923646/how_fiverr_works" type="video/mp4" /></video>

    </div></>}
    <button onClick={() => console.log(favorites)}>check favorites</button>
    </>

  )
}

export default GigCards