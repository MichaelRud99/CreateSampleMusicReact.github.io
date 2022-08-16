import { configureStore } from "@reduxjs/toolkit";
import editSlice from "./editSlice";
import ValidFailSlice from "./ValidFailSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/saga";
import reducers from "./reducer/reducer";
import inputFieldsSlice from "./inputFieldsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: {
      inputFields:inputFieldsSlice,
      edit: editSlice,
      validFail: ValidFailSlice,
      reducers,
   },

   middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
