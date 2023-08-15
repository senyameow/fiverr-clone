import React from 'react'
import Slide from './Slide'
import CardSlider from './Cards/CardSlider' 
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../context/ContextProvider'


const GigCard = ({id, imgs, rated, seller, desc, raiting, bought, price, img}) => {

  const {currency} = useContext(Context)

  

  return (
    <Link to={`/gig/${id}`} state={{id:id}}>
      <div className='flex flex-col gap-3 zxc'>
          <div className='flex-1 relative hovered-arrows'>
            <Slide>
              {imgs.map(img => (
                <CardSlider img={img} id={id} />
              ))}
            </Slide>

            {/* <img src={img} alt="" className='w-full h-full' /> */}
          </div>
          <div className='flex-1 flex flex-col'>
              <div className='w-full flex justify-between items-center flex-row'>
                  <div className='flex flex-row gap-2 items-center '>
                    <img src={seller.pfp} alt="" className='w-[40px] h-[40px] rounded-full'/>
                    <span className='text-slate-900 text-[14px]'>{seller.name}</span>
                  </div>
                  {rated === 'choice' && <div className='bg-slate-700 p-1 py-[1px] rounded-md uppercase tracking-tighter font-bold text-[12px]'>
                    <span className='text-white'>Fiverr's</span>
                    <span>{' '}</span>
                    <span className='text-green-700'>choice</span>
                  </div>}
                  {
                    rated === 'top' && 

                  <div className='bg-amber-400 p-1 py-[1px] rounded-md uppercase tracking-tighter font-bold text-[12px]'>
                    <span className='text-brown-300'>Top Rated</span>
                    
                  </div>
                  }
              </div>
              <Link to={`gig/4/seller/${id}`}>
                <span className='text-slate-600 text-[1rem] whitespace-normal hovered-link'>{desc}</span>
              </Link>

              <div className='flex flex-row gap-2 items-center'>
                <AiFillStar className='text-slate-800' size={20} />
                <span className='text-slate-800'>{raiting}</span>
                <span className='text-slate-400'>{`(${bought})`}</span>
              </div>

              <span className='text-slate-800 font-bold'>{`From ${currency.symbol} ${price*currency.mult}`}</span>
                
          </div>
      </div>
    </Link>
  )
}

export default GigCard