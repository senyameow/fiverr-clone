import React from 'react'

const Button = ({...props}) => {
  return (
    <button className={`${props.outlined && `border${props.bc} border${props.bw} bg-transparent`} ${props.rounded && `rounded-${props.rounded}`} px-3 py-1 ${props.hover && `hover:${props.hover}`} hover:text-slate-950 hover:bg-white animated border border-white`}>
        {props.children}
    </button>
  )
}

export default Button