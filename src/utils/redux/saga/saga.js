import { put, call, takeLatest } from "redux-saga/effects";
import requests from "../../api/requests";
import requestStorageComposition from "../../api/requestStorageComposition";

import {
   readData,
   submit,
   submtiSuccess,
   requestFail,
   sagaClear,
   sagaEdit,
   sagaDeleteItem,
   sagaWriteData,
} from "../slices/listComposition";

export function* readSaga() {
   const data = yield call(requestStorageComposition);
   yield put(sagaWriteData(data));
}

export function* writeNewComposition(value) {
   const data = yield call(requestStorageComposition);
   let requestAnswer = 0;
   yield requests(value.payload, "POST").then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   if (requestAnswer <= 400) {
      yield put(submtiSuccess([data, value.payload]));
   } else {
      yield put(requestFail());
   }
}

export function* clearSaga() {
   const data = yield call(requestStorageComposition);
   yield data.forEach((value) => {
      requests([], "DELETE", value.id);
   });
}

export function* deleteItemSaga(value) {
   yield requests([], "DELETE", value.payload.id);
}

export function* editSaga(value) {
   yield requests(value.payload, "PUT", value.payload.id);
}

export function* watchClickSaga() {
   yield takeLatest(readData, readSaga);
   yield takeLatest(submit, writeNewComposition);
   yield takeLatest(sagaClear, clearSaga);
   yield takeLatest(sagaEdit, editSaga);
   yield takeLatest(sagaDeleteItem, deleteItemSaga);
}

export default function* rootSaga() {
   yield watchClickSaga();
}
