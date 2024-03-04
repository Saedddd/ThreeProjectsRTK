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
      const cardId = action.payload; // для понимания какая именно карточка выбрана
      const cardIndex = state.card.findIndex((item) => item.id === cardId); // пробегание по массиву карточек и возвращение их айди
      const cards = state.card[cardIndex].cardQuantity; // записано в константу значение cardQuantity
      if (cards > 1) {
        // условие, которое уменьшает cardQuantity до значение 1
        state.card[cardIndex].cardQuantity =
          state.card[cardIndex].cardQuantity - 1;
      } else if (cards == 1) {
        // если cardQuantity равен одному то с помощью метода filter удаляется карточка
        state.card = state.card.filter((item) => item.id !== cardId);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const CartReducer = cartSlice.reducer;
