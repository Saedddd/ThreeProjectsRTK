'use client'

import { addTodo } from '@/features/TodoSlice/ui/TodoSlice'
import Button from '@/shared/ui/Button'
import React, { FormEventHandler, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {
    const [newTaskValue, setNewTaskValue] = useState<string>('')

    const dispatch = useDispatch()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) =>{
        e.preventDefault()
        dispatch(addTodo({
            id: uuidv4(),
            text: newTaskValue
        }))
    }

  return (
    <>
        <div className="flex justify-between items-center m-auto w-[450px]">


            <form onSubmit={handleSubmit} className='flex justify-between w-[450px] items-center'>

                <div className="">

                    <label htmlFor="" className='w-[500px]'>
                        <input 
                            value={newTaskValue}
                            onChange={(e) => setNewTaskValue(e.target.value)}
                            className='w-full h-20 ml-10 border-none rounded-2xl px-5' 
                            placeholder='Write a to do...' 
                        />
                    </label>
                </div>
                <div className="">

                    <Button
                        type="submit"
                        onClick={()=>{}}
                        className={'btn btn-primary'}
                    >
                        Add
                    </Button>
                </div>
            </form>

        </div>
    </>
  )
}

export default TodoForm