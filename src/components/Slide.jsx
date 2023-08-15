import React from 'react'
import Slider from 'infinite-react-carousel'
import { cards } from '../data'
import Card from './Card'

const Slide = ({slidesToShow, arrowsScroll, children}) => {
  return (
    <Slider slidesToShow={slidesToShow} swipe arrowsScroll={arrowsScroll} >
       {children}
    </Slider>
  )
}

export default Slide