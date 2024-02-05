import React from 'react';

import { TTodoItem } from '../types';


const TodoItem = ({ id, title, completed } : TTodoItem) => {
	return (
		<li className={`bg-primary shadow-md p-4 mb-4 rounded-md `}>
			<div className='flex justify-between'>
				<span className='flex items-center gap-3'>
				<input type="checkbox" checked={completed} className={`checkbox checkbox-md`} />
					{title}
				</span>
				<div className="">
					<button className='btn btn-danger'>Delete</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;