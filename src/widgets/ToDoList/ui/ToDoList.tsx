import React from 'react'

import TodoItem from '@/entities/TodoItem/ui/TodoItem';

const ToDoList = () => {
    const todos = [
		{ id: 1, title: 'todo1', completed: false },
		{ id: 2, title: 'todo2', completed: false },
		{ id: 3, title: 'todo3', completed: true },
		{ id: 4, title: 'todo4', completed: false },
		{ id: 5, title: 'todo5', completed: false },
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