import { createSlice } from "@reduxjs/toolkit";

export const albumPhotoSlice = createSlice({
   name: "albumPhoto",
   initialState: { albumPhoto: "" },
   reducers: {
      enterAlbumPhoto: (state, albumPhoto) => {
         state.value = albumPhoto.payload;
      },
   },
});

export const { enterAlbumPhoto } = albumPhotoSlice.actions;

export default albumPhotoSlice.reducer;
