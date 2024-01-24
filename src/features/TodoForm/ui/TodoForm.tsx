import Button from '@/shared/ui/Button'
import React from 'react'

const TodoForm = () => {

    const handleSubmit = () =>{

    }

  return (
    <>
        <div className="flex justify-start items-center">

            
            <label htmlFor="" className='w-[1090px]'>
                <input className='w-full h-20 ml-10 border-none rounded-2xl px-5' placeholder='Write a comment...' />
            </label>

            <Button
                type="submit"
                onClick={handleSubmit}
                className={'btn btn-primary'}
            >
                Add
            </Button>

        </div>
    </>
  )
}

export default TodoForm