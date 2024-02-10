import React from "react";

import TodoItem from "@/entities/TodoItem";

import { TTodoList } from "../types";
import { useAppSelector } from "@/shared/hook/hook";

const ToDoList = () => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <ul className="list-group">
      {todos?.map((data) => (
        <TodoItem key={data.id} {...data} />
      ))}
    </ul>
  );
};

export default ToDoList;
