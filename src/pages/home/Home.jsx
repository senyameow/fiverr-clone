import React from 'react'
import Show from '../../components/Show'
import Trusted from '../../components/Trusted'
import Services from '../../components/Services'
import Features from '../../components/Features'
import Jobs from '../../components/Jobs'
import Logo from '../../components/Logo'
import Links from '../../components/Links'


const Home = () => {
  return (
    <div className=''>
      <Show />
      <Trusted />
      <Services />
      <Features />
      <Jobs />
      <Logo />
    </div>
  )
}

export default Home