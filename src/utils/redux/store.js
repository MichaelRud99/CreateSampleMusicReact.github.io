import { configureStore } from "@reduxjs/toolkit";
import albumSlice from "./inputFields/albumSlice";
import authorSlice from "./inputFields/authorSlice";
import dataReleaseSlice from "./inputFields/dataReleaseSlice";
import trackSlice from "./inputFields/trackSlice";

export default configureStore({
   reducer: {
      author: authorSlice,
      dataRelease: dataReleaseSlice,
      track: trackSlice,
      album: albumSlice,
   },
});
