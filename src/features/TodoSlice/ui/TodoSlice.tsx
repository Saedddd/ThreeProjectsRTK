import React from "react";
import { v4 as uuidv4 } from "uuid";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TodoState } from "../types";

const initialState: TodoState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: 1,
        title: action.payload,
        completed: false,
      });
    },
  },
});

export const { addTodo } = TodoSlice.actions;

export const TodoReducer = TodoSlice.reducer;
