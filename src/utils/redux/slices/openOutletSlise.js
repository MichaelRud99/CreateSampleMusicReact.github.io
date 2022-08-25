import { createSlice } from "@reduxjs/toolkit";

export const openOutletSlise = createSlice({
   name: "openOutlet",
   initialState: { open: true },
   reducers: {
      openTrue: (state) => {
         state.open = true;
      },
      openFalse: (state) => {
         state.open = false;
      },
   },
});

export const { openTrue, openFalse } = openOutletSlise.actions;

export default openOutletSlise.reducer;
