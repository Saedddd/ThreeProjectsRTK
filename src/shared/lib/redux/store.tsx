import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "@/features/counterSlice/ui/counterSlice";
import { TodoReducer } from "@/features/TodoSlice/ui/TodoSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todos: TodoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
