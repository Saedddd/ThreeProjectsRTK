import React from 'react'

import TodoItem from '@/entities/TodoItem';
import AddTodoForm from '@/features/AddTodoForm';

import ITodo from '../types';


const ToDoList = ({todos} : ITodo) => {
    const todoss = [
		{ id: '1', title: 'todo1', completed: false },
		{ id: '2', title: 'todo2', completed: false },
		{ id: '3', title: 'todo3', completed: true },

	];

	return (
		<ul className='list-group'>
			
			{todos.map((data) => (
				<TodoItem 
					key={data.id}
					id={data.id} 
					title={data.title} 
					completed={data.completed} />
			))}
		</ul>
	);
}

export default ToDoList