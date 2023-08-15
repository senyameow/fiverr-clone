import React, { useEffect, useContext, useRef } from 'react'
import {AiFillStar} from 'react-icons/ai'
// import 'flowbite';
// Initialization for ES Users
import {
    Input,
    initTE,
  } from "tw-elements";
import { Context } from '../context/ContextProvider';
  
  initTE({ Input });

const Sorting = () => {

    const {price, setPrice, raiting, setRaiting, newCards, applySorting} = useContext(Context)

    const fromEL = useRef()
    const toEL = useRef()
    
    
  return (
    <>
    {/* <button onClick={() => console.log(newCards)}>check raiting</button> */}
            <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-fit mt-5" type="button">Sort <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg></button>

        <div id="dropdownBgHover" class="z-[10] hidden w-[400px] bg-white rounded-lg shadow dark:bg-gray-700 left-[2rem]">
        <h1 className='font-bold text-[1.2rem] relative top-[10px] left-[10px] mb-3'>raiting</h1>
        <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
            
      <li>
        <div class="flex items-center">
            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" onClick={() => setRaiting(5)} />
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                <div className='flex flex-row gap-1'>
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                </div>
            </label>
        </div>
      </li>
      <li>
        <div class="flex items-center">
            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" onClick={() => setRaiting(4)} />
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                <div className='flex flex-row gap-1'>
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />

                </div>
            </label>
        </div>
      </li>
      <li>
        <div class="flex items-center">
            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" onClick={() => setRaiting(3)} />
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                <div className='flex flex-row gap-1'>
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />

                </div>
            </label>
        </div>
      </li>
      <li>
        <div class="flex items-center">
            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" onClick={() => setRaiting(2)} />
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                <div className='flex flex-row gap-1'>
                <AiFillStar size={20} />
                <AiFillStar size={20} />

                </div>
            </label>
        </div>
      </li>
      <li>
        <div class="flex items-center">
            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" onClick={() => setRaiting(1)} />
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                <div className='flex flex-row gap-1'>
                <AiFillStar size={20} />

                </div>
            </label>
        </div>
      </li>
      
    </ul>
    <hr />

    <h1 className='font-bold text-[1.2rem] relative top-[10px] left-[10px] mb-3'>price</h1>

    <div className='flex flex-row w-full p-2'>
            <div class="relative mb-3 flex-1" data-te-input-wrapper-init>
        <input
            ref={fromEL}
            type="number"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputNumber"
            placeholder="Example label" />
        <label
            for="exampleFormControlInputNumber"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >From
        </label>
        </div>
            <div class="relative mb-3 flex-1" data-te-input-wrapper-init>
        <input
        ref={toEL}
            type="number"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputNumber"
            placeholder="Example label" />
        <label
            for="exampleFormControlInputNumber"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >To
        </label>
        </div>

        

        </div>
    <div className='p-3 flex flex-row justify-between'>
        <button type="button" class="flex-1 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Reset</button>
        {/* <button onClick={() => {
            
        }} type="button" class="flex-1 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">apply price</button> */}

        
        <button onClick={() => {
            setPrice({from: fromEL.current.value,
                to: toEL.current.value})
            applySorting()


            
        }} type="button" class="flex-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Apply</button>
    </div>


    </div>
</>

  )
}

export default Sorting