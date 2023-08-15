import React, { useEffect, useState } from 'react'
import { TfiWorld } from 'react-icons/tfi'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../context/ContextProvider'
import User from './User'
import Menu from './Menu'
import {AiOutlineHeart} from 'react-icons/ai'


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

    const {pathname} = useLocation()

    const {currentUser, setShopP, menuOpened, setMenuOpened, favorites, addToFavorites} = useContext(Context)

    //при join у нас будет регистрация юзера + для него мы хотим рендерить немного другие вещи 

    const isScrolled = () => {
        window.scrollY > 5 ? setScrolled(true) : setScrolled(false)
    }


    useEffect(() => {
        window.addEventListener('scroll', isScrolled)
        

        return () => {
            removeEventListener('scroll', isScrolled)
        }
    }, [])


  return (
    <nav className={`z-[30] flex justify-center ${scrolled || pathname !== '/'? 'bg-white text-slate-950' : 'bg-green-700 text-white'} flex-col items-center ${pathname !== '/levels' ? 'sticky' : 'block'} top-0 w-full animated`}>
        
            <div className={`flex justify-between p-4 container items-center`}>
                <div className={`${scrolled || pathname !== '/' ? 'text-slate-950' : 'text-white'} font-bold tracking-tighter text-[32px] cursor-pointer flex-1 text-center sm:text-left`}>
                    <Link to = '/'>
                        <span>
                            Fiverr
                        </span>
                    </Link>
                    <span className='text-green-400'>
                        .
                    </span>
                </div>
            
                <div className='sm:flex hidden flex-row gap-5 items-center text-[15px] cursor-pointer'>
                    <span>
                        Business solutions
                    </span>
                    <span>
                        Explore
                    </span>
                    <span className='flex items-center gap-1'>
                        <TfiWorld />
                        English
                    </span>
                    {!currentUser?.isSeller && <span>
                        Become a seller
                    </span>}
                    {!currentUser && <><span>
                        Sign in
                    </span>
                    <button className='bg-transparent py-1 px-3 rounded-md border border-white hover:bg-green-400 hover:border-green-400'>Join</button></>}

                    {currentUser && <User />}
                </div>
            <Link to={'/menu'}><div onClick={() => setMenuOpened(!menuOpened)} className="flex sm:hidden cursor-pointer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                </svg>
            </div>
            
            </Link>
            <div className='relative cursor-pointer'>
            <AiOutlineHeart className='relative top-[10%]' size={32} />
                <div className='w-[16px] h-[16px] rounded-full bg-pink-400 flex items-center justify-center absolute right-0 bottom-0'>
                    <span>{favorites.length}</span>
                </div>

            </div>
            </div>
            <div className='w-full border-[.5px] border-gray-300'></div>
            {(scrolled || pathname !== '/') && <div className='flex z-[20] w-[1400px] justify-between mx-auto cursor-pointer py-2'>
                <span>
                    link
                </span>
                <span>
                    link
                </span>
                <span>
                    link
                </span>
                <span>
                    link
                </span>
                <span>
                    link
                </span>
                <span>
                    link
                </span>
                <span>
                    link
                </span>
                <span>
                    link
                </span>
                <span>
                    link
                </span>
                <span>
                    link
                </span>
            </div> }
            

        
    </nav>
  )
}

export default Navbar