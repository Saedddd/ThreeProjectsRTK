import React from 'react'

import { ITodoList } from '../types'

import DeleteEditTask from '@/features/DelleteEditTask'

const TodoTask:React.FC<ITodoList> = ({task}) => {
  return (
    <>
    <div>
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                    {task && task.map(task =>(
                        <DeleteEditTask
                            key={task.id}
                            task={task}
                        />
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default TodoTask