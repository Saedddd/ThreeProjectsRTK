import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import ICart from "../types";
import ICardItem from "@/entities/CardItem/types";

const initialState: ICart = {
  card: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICardItem>) => {
      state.card.findIndex((item) => item.id === action.payload.id);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const CartReducer = cartSlice.reducer;
