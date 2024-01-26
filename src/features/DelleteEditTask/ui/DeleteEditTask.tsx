'use client'

import React, { FormEventHandler, useState } from 'react'

import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

import { TaskProps } from '../types'
import Modal from '@/shared/ui/Modal';

const DeleteEditTask:React.FC<TaskProps> = ({task}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [todoValue, setTodoValue] = useState<string>(task.text)


    const handleEditSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        setIsOpen(false)
    }


  return (
    <>
        <tr key={task.id}>
            <td className='w-full'>{task.text} TOdo</td>
            <td  className='flex gap-5 cursor-pointer'>
                <FiTrash2 onClick={() => setIsOpen(true)} />
                
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                <form onSubmit={handleEditSubmit}>
                    <label>
                        Edit task
                            <div className="modal-action">

                                <input 
                                    type="text" 
                                    value={todoValue}
                                    onChange={(e)=>setTodoValue(e.target.value)}
                                    className="input input-bordered input-primary w-full"
                                />

                                <button type='submit' className='btn'>Submit</button>

                            </div>
                    </label>
                </form>

                </Modal>

                <FiEdit />
            </td>
        </tr>

    </>
  )
}

export default DeleteEditTask