'use client'

import { addTodo } from '@/features/TodoSlice/ui/TodoSlice';
import { RootState } from '@reduxjs/toolkit/query';
import { match } from 'assert';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();


	// const count = useSelector((state: RootState) => state);
	// console.log(count);


	const onSubmit = (event : any) => {
		event.preventDefault();
				dispatch(addTodo({
				id: 1,
				title: value,
				completed: true,
			})
		);
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3 flex gap-4 items-center'>
			<div className="">
				<label className='sr-only'>Name</label>
				<input
					type='text'
					className='form-control mb-2 mr-sm-2 input input-bordered input-primary w-full max-w-xs'
					placeholder='Add todo...'
					value={value}
					onChange={(event) => setValue(event.target.value)}
				></input>
			</div>
			<div className="">
				<button type='submit' className='btn btn-primary mb-2'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default AddTodoForm;