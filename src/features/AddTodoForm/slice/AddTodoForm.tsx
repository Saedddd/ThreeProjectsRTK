"use client";

import { addTodo } from "@/features/TodoSlice/slice/TodoSlice";
import React, { useState } from "react";
import { useAppDispatch } from "@/shared/hook/hook";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (value.trim().length) {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="form-inline mt-3 mb-4 flex gap-5 items-center"
    >
      <div className="">
        <label className="sr-only">Name</label>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2 input input-bordered input-primary w-full max-w-xs"
          placeholder="Add todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
      <div className="">
        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
