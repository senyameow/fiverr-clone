import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'


const TableHeader = ({gig, id}) => {

    const {currency} = useContext(Context)

    const price = Math.round(gig.gig.packages[id].price * currency.mult * 100) / 100

  return (
    <th
        scope="col"
        class="border-r px-6 py-4 dark:border-neutral-500">
        <div className='flex flex-col gap-4 justify-items-start text-left'>
            <span className='flex flex-row text-[#62646a] text-[20px] font-normal'>{currency.icon}{price}</span>
            <span className='font-bold text-[1.3rem]'>{gig.gig.packages[id].name}</span>
            <span className='font-semibold text-[.8rem]'>{gig.gig.packages[id].called}</span>
            <span className='font-normal text-[.8rem]'>{gig.gig.packages[id].desc}</span>
        </div>
    </th>
  )
}

export default TableHeader