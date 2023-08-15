import React, { useState } from 'react'
import {BsDot} from 'react-icons/bs'
import { AICards } from '../../data'
import { useEffect } from 'react'



const MSGSeller = ({id}) => {
  
  const gig = AICards.filter(card => card.id === id)[0] //ЭТО НАЙС! МЫ СЕБЯ НАШЛИ

  const [inv, setInv] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setInv(true)
    }, 20000);
    setTimeout(() => {
      setInv(false)
    }, 1000);
  }, [inv])

  return (
    <div className={`${inv ? 'melt' : 'here'} meltBLOCK sticky bottom-[2rem] left-[2rem] p-1 justify-between z-[20]`}>
      <div className='flex flex-row gap-2 bg-white shadow-lg shadow-slate-600 w-fit p-2 px-3 rounded-full hover:bg-gray-100 cursor-pointer'>
          <img src={gig?.seller?.pfp} alt="" className='rounded-full w-[48px] h-[48px] relative' />
          <div className='flex flex-col justify-between h-full'>
              <span className='text-slate-700 text-[1.1rem]'>Message {gig?.seller?.name}</span>
              <div className='flex flex-row items-center gap-1 text-gray-500 text-[.8rem]'>
                  {gig?.seller?.online ? <span className='text-green-400 '>online</span> : <span>Away</span>}
                  <BsDot size={12} className='text-slate-800 font-bold' />
                  <span>Avg. response time: {gig?.seller?.respTime} Hour{gig?.seller?.respTime > 1 && 's'} </span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default MSGSeller