import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
   name: "track",
   initialState: { track: "" },
   reducers: {
      enterTrack: (state, track) => {
         state.value = track.payload;
      },
   },
});

export const { enterTrack, clear } = trackSlice.actions;

export default trackSlice.reducer;
