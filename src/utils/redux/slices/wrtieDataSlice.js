import { createSlice } from "@reduxjs/toolkit";

export const writeDataSlice = createSlice({
   name: "writeData",
   initialState: { data: [] },
   reducers: {
      writeData: (state, data) => {
        /*  switch (data.type) {
            case "writeData/writeData": {
               return {data:data.payload
                  
               };
            }

            default:
               return data;
         } */
      },
   },
});

export const { writeData } = writeDataSlice.actions;

export default writeDataSlice.reducer;
