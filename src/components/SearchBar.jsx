import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
 
const SearchBar = () => {
  return (
    <div className="mb-3 w-full">
  <div className="relative mb-4 flex w-full flex flex-wrap items-stretch">
    <input

      type="search"
      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 px-7 bg-white px-[3rem] py-[12px]"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon3" />

    
    <button
      className="relative z-[2] rounded-r px-6 py-2 text-xs font-medium uppercase text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 bg-green-400"
      type="button"
      id="button-addon3"
      data-te-ripple-init>
      Search
    </button>
    <AiOutlineSearch className='absolute text-slate-500 top-[17%] left-[1.5%]' size={32} />
  </div>
</div>
  )
}

export default SearchBar