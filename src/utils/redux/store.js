import { configureStore } from "@reduxjs/toolkit";
import editSlice from "./slices/editSlice";
import ValidFailSlice from "./slices/ValidFailSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/saga";
import inputFieldsSlice from "./slices/inputFieldsSlice";
import sagaSlice from "./slices/sagaSlice";
import openOutletSlise from "./slices/openOutletSlise";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: {
      inputFields: inputFieldsSlice,
      edit: editSlice,
      validFail: ValidFailSlice,
      sagaSlice,
      openModalWindow:openOutletSlise,
   },

   middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
