import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "@/features/counterSlice/ui/counterSlice";
import { TodoReducer } from "@/features/TodoSlice/ui/TodoSlice";
import { productsApi } from "@/shared/api/apiCardSlice";
import { CartReducer } from "@/features/AddToCart/ui/AddToCart";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    counter: CounterReducer,
    todos: TodoReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
