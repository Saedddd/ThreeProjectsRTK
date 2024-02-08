import React from "react";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TodoState } from "../types";

const initialState = [
  { id: 1, title: "Make a coffee", completed: false },
  { id: 1, title: "Make a tea", completed: true },
  { id: 1, title: "Make a juice", completed: true },
];

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: 1,
        title: action.payload.title,
        comleted: true,
      };

      state.push(newTodo);
    },
  },
});

export const { addTodo } = TodoSlice.actions;

export const TodoReducer = TodoSlice.reducer;
