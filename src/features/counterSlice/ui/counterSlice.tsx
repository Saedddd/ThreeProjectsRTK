

import { createSlice, PayloadAction} from "@reduxjs/toolkit";

import { ICount } from "../types";

const initialState : ICount = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) =>{
            state.value += 1
        },
    }
})

export const {increment} = counterSlice.actions; 

export const CounterReducer = counterSlice.reducer;


