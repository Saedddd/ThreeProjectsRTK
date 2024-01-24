import React from 'react'

import { ITask } from '../types'

const TodoTask = ({id, text} : ITask) => {
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
                        <th>Tasks</th>
                        <th>Actions</th>
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default TodoTask