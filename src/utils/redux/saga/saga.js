import { put, call, takeLatest } from "redux-saga/effects";
import {
   sagaReadData,
   sagaSubmit,
   sagaClear,
   sagaEdit,
   sagaDeleteItem,
} from "../slices/sagaSlice";

export function* readSaga() {
   const data = yield call(readData);
   yield put({ type: "WRITE_DATA", payload: data });
}

export function* writeSaga(value) {
   yield sendData(value.payload);
}

export function* clearSaga() {
   const data = yield call(readData);
   yield data.forEach((value) => {
      deleteData(value.id);
   });
}

export function* deleteItemSaga(value) {
   yield deleteData(value.payload.id);
}

export function* editSaga(value) {
   yield editData(value.payload, value.payload.id);
}

async function readData() {
   const request = await fetch("http://localhost:3000/storage");
   const data = await request.json();
   return data;
}

function sendData(data) {
   const XHR = new XMLHttpRequest();

   let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

   for (name in data) {
      urlEncodedDataPairs.push(
         encodeURIComponent(name) + "=" + encodeURIComponent(data[name])
      );
   }
   urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");
   XHR.open("POST", "http://localhost:3000/storage");
   XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   XHR.send(urlEncodedData);
}

function editData(data, id) {
   const XHR = new XMLHttpRequest();

   let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

   for (name in data) {
      urlEncodedDataPairs.push(
         encodeURIComponent(name) + "=" + encodeURIComponent(data[name])
      );
   }

   urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");
   XHR.open("PUT", "http://localhost:3000/storage/" + id);
   XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   XHR.send(urlEncodedData);
}

function deleteData(id) {
   const XHR = new XMLHttpRequest();
   const urlEncodedData = "";

   XHR.open("DELETE", "http://localhost:3000/storage/" + id);
   XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   XHR.send(urlEncodedData);
}

export function* watchClickSaga() {
   yield takeLatest(sagaReadData, readSaga);
   yield takeLatest(sagaSubmit, writeSaga);
   yield takeLatest(sagaClear, clearSaga);
   yield takeLatest(sagaEdit, editSaga);
   yield takeLatest(sagaDeleteItem, deleteItemSaga);
}

export default function* rootSaga() {
   yield watchClickSaga();
}
