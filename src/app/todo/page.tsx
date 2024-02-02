



import AddTodoForm from '@/features/AddTodoForm'
import React from 'react'


const ToDoList = () => {


  return (
    <main className="h-screen text-center flex justify-center  bg-black text-white">
            
        <div className="py-[10rem] items-center">
            <h1 className='mb-12'>Todo List</h1>

            <div className="">
                <AddTodoForm/>


            </div>
            
        </div>
    </main>
  )
}

export default ToDoList