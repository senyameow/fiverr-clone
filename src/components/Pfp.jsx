import React, { useState } from 'react'
import { Context } from '../context/ContextProvider'
import { useContext } from 'react'

const Pfp = ({currentUserName}) => {

    const {showP, setShowP} = useContext(Context)


  return (
    <div onClick={() => setShowP(!showP)} className='w-[45px] h-[45px] rounded-full relative text-center bg-blue-300 text-red-500 text-[2rem] flex justify-center items-center'>
        <h1>{currentUserName[0]}</h1>
    </div>
  )
}

export default Pfp