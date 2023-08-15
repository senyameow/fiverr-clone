import React from 'react'
import {BsCheckLg} from 'react-icons/bs'

const TD = ({gig, p, indTR, indP}) => {
  return (
    <>
    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 text-center">
        <div className='flex justify-center items-center'>
            {gig?.gig?.packages[indP]?.tr[indTR]?.bool === true && <BsCheckLg size={28} className='text-slate-800 font-bold' />}
            {gig?.gig?.packages[indP]?.tr[indTR]?.bool === false && <BsCheckLg size={28} className='text-slate-300 font-bold' />}
            {gig?.gig?.packages[indP]?.tr[indTR]?.bool === null && (
                <div>
                    {gig?.gig?.packages[indP]?.tr[indTR]?.val}
                </div>
            )}
        </div>
    </td>
    
    </>
  )
}

export default TD