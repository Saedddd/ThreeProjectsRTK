'use client'

import React, { useState } from 'react'

import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

import { TaskProps } from '../types'
import Modal from '@/shared/ui/Modal';

const DeleteEditTask:React.FC<TaskProps> = ({task}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [todoValue, setTodoValue] = useState<string>(task.text)


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
                    <input 
                        type="text" 
                        
                    
                    />
                </Modal>

                <FiEdit />
            </td>
        </tr>

    </>
  )
}

export default DeleteEditTask