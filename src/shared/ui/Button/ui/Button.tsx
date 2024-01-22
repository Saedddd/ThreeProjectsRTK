import React from 'react'

import { IBtn } from '../types'

const Button = ({className, onClick, type, children} : IBtn) => {
  return (
    <button className={className} onClick={onClick} type={type}>
        {children}
    </button>
  )
}

export default Button