import { createSlice } from "@reduxjs/toolkit";

import ICart from "../types";
import ICardItem from "@/entities/CardItem/types";

const initialState: ICart = {
  card: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
