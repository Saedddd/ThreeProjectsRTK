
import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "@/features/counterSlice/ui/counterSlice";

export const store = configureStore({
    reducer: {
      counter: CounterReducer
    },
})

export type AppDispatch = typeof store.dispatch;

