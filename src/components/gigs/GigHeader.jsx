import React from 'react'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {ImShare2} from 'react-icons/im'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { Context } from '../../context/ContextProvider'
import { useContext } from 'react'

const GigHeader = ({id}) => {

    const {addToFavorites, favorites} = useContext(Context)

  return (
    
      <div className='flex flex-row w-full justify-between items-center py-[2rem]'>
        <Link to={'/'} className='max-w-fit hover:bg-gray-300 animated rounded-full p-2 flex-1'><AiOutlineHome size={25} /></Link>
        <div className='flex flex-row items-center gap-5'>
          <div>
          <button data-popover-target="popover-heart" type="button" className='flex justify-center items-center py-1 px-2' onClick={() => {
            addToFavorites(id)
            console.log(favorites)
          }}>
            <BsFillSuitHeartFill size={24} className={`${favorites.find(card => card.id === id) ? 'text-pink-500' : 'text-black'} transition-color duration-300 cursor-pointer`} />
          </button>
          <div data-popover id="popover-heart" role="tooltip" class="absolute z-10 invisible inline-block w-32 text-sm text-gray-200 transition-opacity duration-600 bg-gray-700 border border-gray-700 rounded-lg shadow-sm opacity-0 dark:text-gray-700 dark:border-gray-600 dark:bg-gray-800">
          <div class="px-3 py-2 bg-gray-700 border-b border-gray-700 rounded-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 class="font-semibold text-gray-100 dark:text-white text-center">Save to list</h3>
          </div>
          <div data-popper-arrow></div>
      </div>
          </div>
          

          <button data-popover-target="popover-default" type="button" className='flex justify-center items-center py-2 px-3 border border-gray-300 hover:bg-gray-200 rounded-lg'>
            <ImShare2 size={24} />
          </button>
          <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-32 text-sm text-gray-200 transition-opacity duration-600 bg-gray-700 border border-gray-700 rounded-lg shadow-sm opacity-0 dark:text-gray-700 dark:border-gray-600 dark:bg-gray-800">
          <div class="px-3 py-2 bg-gray-700 border-b border-gray-700 rounded-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 class="font-semibold text-gray-100 dark:text-white text-center">Share this gig</h3>
          </div>
          <div data-popper-arrow></div>
      </div>
        </div>

      </div>
    
  )
}

export default GigHeader