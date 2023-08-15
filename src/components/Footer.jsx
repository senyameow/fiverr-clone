import React from 'react'
import Links from './Links'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <div className='border-t-2 border-gray-200'>
      <div className='container py-[3rem] mx-auto border-b border-gray-300'>
        <Links />
        <FooterBottom />
      </div>
    </div>
  )
}

export default Footer