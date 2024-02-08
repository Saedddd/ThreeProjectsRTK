import React from 'react'

import TodoItem from '@/entities/TodoItem';

import { TTodoList } from '../types';

const ToDoList = ({todos} : TTodoList) => {
	return (
		<ul className='list-group'>
			{todos[0].map((data) => (
				<TodoItem
					key={data.id}
					id={data.id}
					title={data.title}
					completed={data.completed}
				/>
			))}

		</ul>
	);
}

export default ToDoList