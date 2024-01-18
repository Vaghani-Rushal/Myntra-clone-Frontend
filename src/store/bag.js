import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload.itemId);
    },
    removeItem: (state, action) => {
      return (state = state.filter((id) => id != action.payload.itemId));
    },
  },
});

export const bagAction = bagSlice.actions;

export default bagSlice;
