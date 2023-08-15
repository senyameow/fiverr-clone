import React from 'react'
import GigHeader from '../../components/gigs/GigHeader'
import { useLocation } from 'react-router-dom'
import GigBody from '../../components/gigs/GigBody'
import MSGSeller from '../../components/gigs/MSGSeller'


const Gig = () => {
  const location = useLocation()
  const {id} = location.state //ОООООЧЕНЬ КЛАССНО, ЧТО БОГ ДАЛ ВОЗМОЖНОСТЬ ПРОБРАСЫВАТЬ ПРОПСЫ ЧЕРЕЗ ЛИНК СПАСИБО БОЖЕ
  return (
    <div className='container mx-auto py-[3rem] flex flex-col relative'>
      <GigHeader id={id} />
      <GigBody id={id} />
      <MSGSeller id={id} />
    </div>
  )
}



export default Gig