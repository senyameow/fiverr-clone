import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'

const CardSlider = ({img, id, heart=true}) => {

    const [liked, setLiked] = useState(false)
    const {addToFavorites, favorites} = useContext(Context)

  return (
    <Link to={'/gig/4'}>
        <div className='relative hovered-arrows' onClick={() => console.log(id)}>
            <img src={img} alt="" className='rounded-lg' />
            {heart && <AiOutlineHeart size={32} className={`${favorites.find(card => card.id === id) ? 'text-pink-400' : 'text-white'} z-[3] bg-transparent absolute top-[10px] right-[10px]`} onClick={() => {
              setLiked(!liked)
              addToFavorites(id)
              console.log(favorites)
            }} />}
        </div>
    </Link>
  )
}

export default CardSlider