import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../context/ContextProvider'
import Pfp from './Pfp'
import { Link } from 'react-router-dom'

const User = () => {

    const {currentUser, showP} = useContext(Context)


  return (
    <div className='flex flex-row gap-3 relative'>
        <Pfp currentUserName={currentUser?.userName} />
        <span>{currentUser?.username}</span>
        {showP && <div className='w-[220px] h-[220px] rounded-xl bg-blue-400 absolute right-[10px] top-[50px] flex flex-col p-10 gap-3 items-center justify-center'>
            {currentUser?.isSeller && (

                <>
                    <Link to='/gig'><span>Gig</span></Link>
                    <Link to='/add'><span>Add New Gig</span></Link>
                </>
            )}
            <Link to='/orders'><span>Orders</span></Link>
            <Link to='/messages'><span>Messages</span></Link>
            <Link to='/'><span>Logout</span></Link>
        </div>}
    </div>
  )
}

export default User