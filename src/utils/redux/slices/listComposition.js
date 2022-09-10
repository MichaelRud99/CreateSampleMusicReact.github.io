import { createSlice } from "@reduxjs/toolkit";

export const listCompositionSlice = createSlice({
   name: "listComposition",
   initialState: { data: [], fail: false },
   reducers: {
      submit: (state, newComposition) => {
         state.newComposition = newComposition.payload;
      },
      submtiSuccess: (state, arrPayload) => {
         let compositions = arrPayload.payload[0];
         const newComposition = arrPayload.payload[1];
         state.data = compositions.concat(newComposition);
      },
      requestFail: (state) => {
         state.fail = !state.fail;
      },
      sagaEdit: (state, data) => {
         state.data = data.payload;
      },
      sagaDeleteItem: (state, data) => {
         state.data = data.payload;
      },
      sagaWriteData: (state, data) => {
         state.data = data.payload;
      },
      readData: () => {},
      sagaClear: (state) => {},
   },
});

export const {
   submit,
   submtiSuccess,
   requestFail,
   readData,
   sagaClear,
   sagaEdit,
   sagaDeleteItem,
   sagaWriteData,
} = listCompositionSlice.actions;

export default listCompositionSlice.reducer;
