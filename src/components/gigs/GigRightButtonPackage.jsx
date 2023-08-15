import React, { useEffect } from 'react'

const GigRightButtonPackage = ({setPName, setCurrentPackage, gig, p, ind, bFocused, currentPackage}) => {


    

  return (
    <button onClick={() => {
        setPName(p.name)
        setCurrentPackage(
            gig.gig.packages.filter(pack => pack.name === p.name)[0]
        )
        // console.log(ind)
        // console.log(bFocused)
        console.log(currentPackage)
    }} className={`${currentPackage.id == ind && 'bg-white text-slate-800 border-b-[3px] border-b-black'} cursor-pointer flex-1 px-5 py-3 flex justify-center items-center text-center bg-gray-100 border border-[#dadbdd] text-[#74767e] focus:bg-white focus:text-slate-800 focus:border-b-[3px] focus:border-b-black`}>
        <span className='font-semibold'>{p.name}</span>
    </button>
  )
}

export default GigRightButtonPackage