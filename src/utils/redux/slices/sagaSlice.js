import { createSlice } from "@reduxjs/toolkit";

export const sagaSlice = createSlice({
   name: "saga",
   initialState: { data: [] },
   reducers: {
      sagaSubmit: (state, data) => {
         state.data = data.payload;
      },
      sagaEdit: (state, data) => {
         state.data = data.payload;
      },
      sagaDeleteItem: (state, data) => {
         state.data = data.payload;
      },
      sagaReadData: (state) => {},
      sagaClear: (state) => {},
   },
});

export const { sagaSubmit, sagaReadData, sagaClear, sagaEdit, sagaDeleteItem } =
   sagaSlice.actions;

export default sagaSlice.reducer;
