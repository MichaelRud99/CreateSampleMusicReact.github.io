import { put, call, takeLatest } from "redux-saga/effects";
import checkSuccess from "./checkSuccess";
import requests from "../../api/requests";
import requestStorageComposition from "../../api/requestStorageComposition";

import requestDelete from "../../api/requestDelete.js";

import {
   writeData,
   readData,
   submit,
   submtiSuccess,
   edit,
   editSuccess,
   delet,
   deleteSuccess,
   clearData,
   clearDataSuccess,
} from "../slices/listComposition";

let requestAnswer = 0;

export function* read() {
   const data = yield call(requestStorageComposition);
   yield put(writeData(data));
}

export function* writeNewComposition(value) {
   yield requests(value.payload, "POST").then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   yield checkSuccess(requestAnswer, submtiSuccess, value);
}

export function* clearDataGenerator() {
   const data = yield call(requestStorageComposition);
   yield data.forEach((value) => {
      requestDelete(value.id, false).then(
         (result) => (requestAnswer = result),
         (err) => (requestAnswer = err)
      );
   });
   yield checkSuccess(requestAnswer, clearDataSuccess, []);
}

export function* deleteComposition(value) {
   yield requestDelete(value.payload[0]).then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   yield checkSuccess(requestAnswer, deleteSuccess, value);
}

export function* editComposition(value) {
   yield requests(value.payload[0], "PUT", value.payload[0].id).then(
      (result) => (requestAnswer = result),
      (err) => (requestAnswer = err)
   );
   yield checkSuccess(requestAnswer, editSuccess, value);
}

export function* watchClickSaga() {
   yield takeLatest(readData, read);
   yield takeLatest(submit, writeNewComposition);
   yield takeLatest(clearData, clearDataGenerator);
   yield takeLatest(delet, deleteComposition);
   yield takeLatest(edit, editComposition);
}

export default function* rootSaga() {
   yield watchClickSaga();
}
