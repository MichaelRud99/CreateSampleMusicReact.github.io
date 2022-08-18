import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
   name: "edit",
   initialState: { edit: false },
   reducers: {
      editTrue: (state) => {
         state.edit = true;
      },
      editFalse:(state)=>{
          state.edit=false
      }
   },
});

export const { editTrue,editFalse } = editSlice.actions;

export default editSlice.reducer;