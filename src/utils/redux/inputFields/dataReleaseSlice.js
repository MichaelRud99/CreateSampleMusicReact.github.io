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

export const { enterDataRelease } = dataReleaseSlice.actions;

export default dataReleaseSlice.reducer;
