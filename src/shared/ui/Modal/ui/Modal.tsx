import React from 'react'

import { IModal } from '../types'

const Modal = ({isOpen, onClose, children} : IModal) => {
  return (

    <div className={`modal ${isOpen ? 'modal-open' : ''} `}>

            <div className="modal-box">
                    <form method="dialog">
                    <button onClick={()=> onClose()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {children}
        </div>
    </div>
  )
}

export default Modal