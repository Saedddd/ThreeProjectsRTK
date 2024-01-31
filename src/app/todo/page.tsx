
import TodoDetails from '@/widgets/TodoDetails'
import React from 'react'
import { useGetAllTasksQuery } from '@/shared/api/TasksApiSlice'

const ToDoList = () => {
  const {data} = useGetAllTasksQuery();

  console.log(data)

  return (
    <main className="h-screen text-center flex justify-center  bg-black text-white">
            
        <div className="py-[10rem] items-center">
            <h1 className='mb-12'>Todo List</h1>

            <div className="">
              <TodoDetails/>

            </div>
            
        </div>
    </main>
  )
}

export default ToDoList