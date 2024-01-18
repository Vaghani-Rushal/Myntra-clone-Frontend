import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bag";
import itemsSlice from "./items";
import fetchStatusSlice from "./fetchItems";

const myntraStor = configureStore({
  reducer: {
    bag: bagSlice.reducer,
    item: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default myntraStor;
