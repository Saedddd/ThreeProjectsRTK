import React from "react";
import { v4 as uuidv4 } from "uuid";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoState = {
  list: Todo[];
};

const initialState: TodoState = {
  list: [],
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({
        id: uuidv4(),
        title: action.payload,
        completed: false,
      });
    },

    toggleComplete: (state, action: PayloadAction<string>) => {},
    removeTodo: (state, action: PayloadAction<string>) => {},
  },
});

export const { addTodo, toggleComplete, removeTodo } = TodoSlice.actions;

export const TodoReducer = TodoSlice.reducer;
