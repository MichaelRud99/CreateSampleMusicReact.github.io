import { configureStore } from "@reduxjs/toolkit";
import editSlice from "./slices/editSlice";
import ValidFailSlice from "./slices/ValidFailSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/saga";
import inputFieldsSlice from "./slices/inputFieldsSlice";
import writeDataSlice from "./slices/wrtieDataSlice";
import sagaSlice from "./slices/sagaSlice";
import reducer from "./reducer/reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: {
      inputFields: inputFieldsSlice,
      edit: editSlice,
      validFail: ValidFailSlice,
      /* writeData: writeDataSlice, */
      sagaSlice,
      reducer,
   },

   middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
