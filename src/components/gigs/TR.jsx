import React from 'react'
import TD from './TD'

const TR = ({tr, gig, ind}) => {
  return (
    <tr className="border-b dark:border-neutral-500">
        <td
            className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
            <span>{tr}</span>
        </td>
        {gig?.gig?.packages.map((p, id) => (
            <>
            {/* <button onClick={() => console.log(p)}>check p</button> */}
            <TD gig={gig} p={p} indTR={ind} indP={id} />
             {/* id (0/1/2) */}
            </>
        ))}
    </tr>
  )
}

export default TR