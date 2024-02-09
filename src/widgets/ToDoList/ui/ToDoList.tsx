import React from "react";

import TodoItem from "@/entities/TodoItem";

import { TTodoList } from "../types";

const ToDoList = ({ todo }: TTodoList) => {
  return (
    <ul className="list-group">
      {todo?.map((data) => (
        <TodoItem
          key={data.id}
          id={data.id}
          title={data.title}
          completed={data.completed}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
