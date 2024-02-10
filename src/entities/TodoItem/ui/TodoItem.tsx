import React from "react";

import { TTodoItem } from "../types";

import { useAppDispatch } from "@/shared/hook/hook";

import { toggleComplete, removeTodo } from "@/features/TodoSlice/ui/TodoSlice";

const TodoItem = ({ id, title, completed }: TTodoItem) => {
  const dispatch = useAppDispatch();

  return (
    <li className={`bg-primary shadow-md p-4 mb-4 rounded-md `}>
      <div className="flex justify-between">
        <span className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={completed}
            className={`checkbox checkbox-md`}
            onChange={() => dispatch(toggleComplete(id))}
          />
          {title}
        </span>
        <div className="">
          <button
            className="btn btn-danger"
            onClick={() => dispatch(removeTodo(id))}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
