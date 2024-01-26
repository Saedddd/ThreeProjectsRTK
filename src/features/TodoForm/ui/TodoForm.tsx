'use client'

import Button from '@/shared/ui/Button'
import React, { FormEventHandler, useState } from 'react'

const TodoForm = () => {
    const [newTaskValue, setNewTaskValue] = useState<string>('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) =>{
        e.preventDefault()
        console.log(newTaskValue)
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