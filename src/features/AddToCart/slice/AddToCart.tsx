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
      const index = state.card.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.card[index].cardQuantity = state.card[index].cardQuantity + 1;
      } else {
        const tempProduct = { ...action.payload, cardQuantity: 1 };
        state.card.push(tempProduct);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const cardId = action.payload;
      state.card = state.card.filter((item) => item.id !== cardId);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const CartReducer = cartSlice.reducer;
