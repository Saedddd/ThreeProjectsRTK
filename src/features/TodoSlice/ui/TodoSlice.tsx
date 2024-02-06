import React from 'react'

import { createSlice } from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
    name: 'todo',
    initialState:[],
    reducers:{

    }
})

export const TodoReducer = TodoSlice.reducer;