'use client'

import React, { useState } from 'react';

const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const onSubmit = (event : any) => {
		event.preventDefault();
		console.log('user entered: ' + value);
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