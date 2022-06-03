import { createSlice } from "@reduxjs/toolkit";

export const albumSlice = createSlice({
   name: "album",
   initialState: { album: "" },
   reducers: {
      enterAlbum: (state, album) => {
         state.value = album.payload;
      },
   },
});

export const { enterAlbum, clear } = albumSlice.actions;

export default albumSlice.reducer;
