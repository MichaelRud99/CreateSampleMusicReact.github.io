import { createSlice } from "@reduxjs/toolkit";

export const dataReleaseSlice = createSlice({
   name: "dataRelease",
   initialState: { dataRelease: "" },
   reducers: {
      enterDataRelease: (state, dataRelease) => {
         state.value = dataRelease.payload;
      },
   },
});

export const { enterDataRelease, clear } = dataReleaseSlice.actions;

export default dataReleaseSlice.reducer;
