import React from 'react'

import TodoItem from '@/entities/TodoItem';


const ToDoList = () => {
    const todos = [
		{ id: '1', title: 'todo1', completed: false },
		{ id: '2', title: 'todo2', completed: false },
		{ id: '3', title: 'todo3', completed: true },

	];

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				// eslint-disable-next-line react/jsx-key
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
}

export default ToDoList