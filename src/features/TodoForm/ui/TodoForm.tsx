'use client'

import Button from '@/shared/ui/Button'
import React from 'react'

const TodoForm = () => {

    const handleSubmit = () =>{

    }

  return (
    <>
        <div className="flex justify-between items-center m-auto w-[450px]">

            <div className="">

                <label htmlFor="" className='w-[500px]'>
                    <input className='w-full h-20 ml-10 border-none rounded-2xl px-5' placeholder='Write a to do...' />
                </label>
            </div>
            <div className="">

                <Button
                    type="submit"
                    onClick={handleSubmit}
                    className={'btn btn-primary'}
                >
                    Add
                </Button>
            </div>

        </div>
    </>
  )
}

export default TodoForm