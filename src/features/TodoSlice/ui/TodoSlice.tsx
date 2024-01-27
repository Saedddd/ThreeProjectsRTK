
import { createSlice, PayloadAction} from "@reduxjs/toolkit";

import { ITodoList } from "../types";


const initialState: ITodoList  = {
    todoList: [],
}

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        }
    }
})

export const {addTodo} = TodoSlice.actions; 

export const TodoReducer = TodoSlice.reducer;
