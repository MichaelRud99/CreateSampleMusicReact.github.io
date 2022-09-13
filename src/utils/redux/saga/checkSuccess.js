import { put, call } from "redux-saga/effects";
import requestStorageComposition from "../../api/requestStorageComposition";
import { requestFail } from "../slices/listComposition";

export function* checkSuccess(requestAnswer, actionSuccess, value) {
   const data = yield call(requestStorageComposition);

   if (requestAnswer <= 400) {
      yield put(actionSuccess([data, value.payload]));
   } else {
      yield put(requestFail());
   }
}
export default checkSuccess;
