'use client'

import React, { FormEventHandler, useState } from 'react'

import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

import { TaskProps } from '../types'
import Modal from '@/shared/ui/Modal';

const DeleteEditTask:React.FC<TaskProps> = ({task}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isOpenDel, setIsOpenDel] = useState<boolean>(false)
    const [todoValue, setTodoValue] = useState<string>(task.text)


    const handleEditSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        setIsOpen(false)
    }

    const handleDeleteTask = async (id : string) => {
        setIsOpenDel(false)
    }

  return (
    <>
        <tr key={task.id}>
            <td className='w-full'>{task.text} TOdo</td>
            <td  className='flex gap-5 cursor-pointer'>

                <FiEdit onClick={() => setIsOpen(true)} />
                
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

                <FiTrash2 onClick={() => setIsOpenDel(true)} />


                <Modal
                    isOpen={isOpenDel}
                    onClose={()=> setIsOpenDel(false)}

                >
                    <h3 className='text-lg'>
                        Are you sure, you want to delete this task?
                    </h3>
                    <div className='modal-action'>
                        <button onClick={() => handleDeleteTask(task.id)} className='btn'>
                        Yes
                        </button>
                     </div>

                </Modal>





               
            </td>
        </tr>

    </>
  )
}

export default DeleteEditTask