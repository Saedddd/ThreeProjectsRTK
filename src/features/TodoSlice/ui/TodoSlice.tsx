
import { createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState  = {
    todoList: [],
}

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
    
    }
})

export const {} = TodoSlice.actions; 

export const TodoReducer = TodoSlice.reducer;
