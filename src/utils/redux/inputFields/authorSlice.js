import { createSlice } from "@reduxjs/toolkit";

export const authorSlice = createSlice({
   name: "author",
   initialState: { author: "" },
   reducers: {
      enterAuthor: (state, author) => {
         state.value = author.payload;
      },
   },
});

export const { enterAuthor, clear } = authorSlice.actions;

export default authorSlice.reducer;
