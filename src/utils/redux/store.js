import { configureStore } from "@reduxjs/toolkit";
import editSlice from "./editSlice";
import albumSlice from "./inputFields/albumSlice";
import albumPhotoSlice from "./inputFields/albumPhotoSlice";
import authorSlice from "./inputFields/authorSlice";
import dataReleaseSlice from "./inputFields/dataReleaseSlice";
import trackSlice from "./inputFields/trackSlice";
import ValidFailSlice from "./ValidFailSlice";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/saga";
import reducers from "./reducer/reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: {
      author: authorSlice,
      dataRelease: dataReleaseSlice,
      track: trackSlice,
      album: albumSlice,
      albumPhoto: albumPhotoSlice,
      edit: editSlice,
      validFail: ValidFailSlice,
      reducers,
   },

   middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
