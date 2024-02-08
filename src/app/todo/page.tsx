'use client'



import TotalComletedItems from '@/entities/TotalComletedItems'
import AddTodoForm from '@/features/AddTodoForm'
import ToDoList from '@/widgets/ToDoList'
import { RootState } from '@reduxjs/toolkit/query'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Todo = () => {

  const state = useSelector((state: RootState) => state);

  return (
    <main className="h-screen text-center flex justify-center  bg-black text-white">
            
        <div className="py-[10rem] items-center">
            <h1 className='mb-12'>Todo List</h1>

            <div className="">
            <AddTodoForm/>
            <ToDoList
              todos={
                state.todos
              }
              />
            <TotalComletedItems/>


            </div>
            
        </div>
    </main>
  )
}

export default Todo