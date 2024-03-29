

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
        decrement: (state) =>{
            state.value > 0 ?  state.value -= 1 : state.value = 0
        },
        reset: (state) =>{
            state.value = 0
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions; 

export const CounterReducer = counterSlice.reducer;


