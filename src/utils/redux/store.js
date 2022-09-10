import { configureStore } from "@reduxjs/toolkit";
import editSlice from "./slices/editSlice";
import ValidFailSlice from "./slices/ValidFailSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/saga";
import inputFieldsSlice from "./slices/inputFieldsSlice";
import listCompositionSlice from "./slices/listComposition"
import openOutletSlise from "./slices/openOutletSlise";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: {
      inputFields: inputFieldsSlice,
      edit: editSlice,
      validFail: ValidFailSlice,
      listComposition:listCompositionSlice,
      openModalWindow:openOutletSlise,
   },

   middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
