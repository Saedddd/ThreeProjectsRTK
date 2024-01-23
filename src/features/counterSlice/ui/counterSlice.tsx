

import { createSlice, PayloadAction} from "@reduxjs/toolkit";

import { ICount } from "../types";

const initialState : ICount = {
    value: 100,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{

    }
})

export const CounterReducer = counterSlice.reducer;


