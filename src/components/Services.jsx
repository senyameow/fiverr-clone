import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import {Link} from 'react-router-dom'
import { cards } from '../data'
import Card from './Card'
import { useContext } from 'react'
import { Context } from '../context/ContextProvider'

const Services = () => {

    const {windowWidth, setWindowWidth, changeSts} = useContext(Context)

    const changeAll = () => {
        setWindowWidth(window.innerWidth)
        setSts(changeSts())
        console.log(sts)
    }
    
    useEffect(() => {
        window.addEventListener('resize' , changeAll)

        return () => removeEventListener('resize', changeAll)
    }, [windowWidth])

    

    const [sts, setSts] = useState(changeSts())



  return (
    
        <div className='container my-[3rem] mx-auto  '>
            <Slide slidesToShow={sts} arrowsScroll={3}>
                {cards.map(card => (
                    
                    <Card key={card.id} item={card} />
                ))}
            </Slide>
            {/* <button onClick={() => console.log(windowWidth)}>check</button> */}
        </div>
    
  )
}

export default Services