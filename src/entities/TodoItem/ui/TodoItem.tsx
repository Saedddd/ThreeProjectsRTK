import React from "react";

import ITodoItem from "../types";

import { useAppDispatch } from "@/shared/hook/hook";

import {
  toggleComplete,
  removeTodo,
} from "@/features/TodoSlice/slice/TodoSlice";

const TodoItem: React.FC<ITodoItem> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={`bg-primary shadow-md p-4 mb-4 rounded-md `}>
      <div className="flex justify-between">
        <span className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={completed}
            className={`checkbox bg-black`}
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
