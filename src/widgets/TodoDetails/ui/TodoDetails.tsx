import TodoTask from '@/entities/TodoTask/ui/TodoTask'
import TodoForm from '@/features/TodoForm'
import React from 'react'

const TodoDetails = () => {
  return (
    <>
      
        <div className="mb-12">
            <TodoForm/>
        </div>

        <div className="">
            <TodoTask id={0} text={''}/>
        </div>
    </>
  )
}

export default TodoDetails