import { createSlice } from "@reduxjs/toolkit";

const intitalState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    intitalState,
    reducers:{

    }
})

export default counterSlice.reducer;