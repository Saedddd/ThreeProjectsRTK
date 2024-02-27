import React from "react";
import { v4 as uuidv4 } from "uuid";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import TodoState from "../types";

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

    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = TodoSlice.actions;

export const TodoReducer = TodoSlice.reducer;
