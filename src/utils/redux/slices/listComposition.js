import { createSlice } from "@reduxjs/toolkit";

export const listCompositionSlice = createSlice({
   name: "listComposition",
   initialState: { data: [], fail: false, updateData: false },
   reducers: {
      writeData: (state, data) => {
         state.data = data.payload;
      },
      readData: () => {},
      submit: (state, сomposition) => {
         state.сomposition = сomposition.payload;
      },
      submtiSuccess: (state, arr) => {
         let compositions = arr.payload[0];
         state.data = compositions;
         state.updateData = !state.updateData;
      },
      requestFail: (state) => {
         state.fail = !state.fail;
      },
      edit: (state, arr) => {
         const editComposition = arr.payload[0];
         state.сomposition = editComposition.payload;
      },
      editSuccess: (state, arr) => {
         let compositions = arr.payload[0];
         const composition = arr.payload[1][0];
         const index = arr.payload[1][1];
         compositions[index] = composition;
         state.data = compositions;
         state.updateData = !state.updateData;
      },
      delet: (state, index) => {
         state.сomposition = index.payload;
      },
      deleteSuccess: (state, arr) => {
         let compositions = arr.payload[0];
         const index = arr.payload[1][1];
         compositions.slice(index);
         state.data = compositions;
         state.updateData = !state.updateData;
      },
      clearData: () => {},
      clearDataSuccess: (state) => {
         state.data = [];
         state.updateData = !state.updateData;
      },
   },
});

export const {
   writeData,
   readData,
   submit,
   submtiSuccess,
   requestFail,
   edit,
   editSuccess,
   delet,
   deleteSuccess,
   clearData,
   clearDataSuccess,
} = listCompositionSlice.actions;

export default listCompositionSlice.reducer;
