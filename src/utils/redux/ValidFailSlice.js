import { createSlice } from "@reduxjs/toolkit";

export const validFailSlice = createSlice({
   name: "validFail",
   initialState: { valid: true },
   reducers: {
      validTrue: (state) => {
         state.valid = true;
      },
      validFalse: (state) => {
         state.valid = false;
      },
   },
});

export const { validTrue, validFalse } = validFailSlice.actions;

export default validFailSlice.reducer;
