import { configureStore } from "@reduxjs/toolkit";
import editSlice from "./editSlice";
import albumSlice from "./inputFields/albumSlice";
import authorSlice from "./inputFields/authorSlice";
import dataReleaseSlice from "./inputFields/dataReleaseSlice";
import trackSlice from "./inputFields/trackSlice";
import ValidFailSlice from "./ValidFailSlice";

export default configureStore({
   reducer: {
      author: authorSlice,
      dataRelease: dataReleaseSlice,
      track: trackSlice,
      album: albumSlice,
      edit: editSlice,
      validFail: ValidFailSlice
   },
});
