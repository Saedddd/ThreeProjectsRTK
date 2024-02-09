import React from "react";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TodoState } from "../types";

const initialState: TodoState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {},
  },
});

export const { addTodo } = TodoSlice.actions;

export const TodoReducer = TodoSlice.reducer;
