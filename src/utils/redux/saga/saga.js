import { put, call, takeLatest } from "redux-saga/effects";

export function* readSaga() {
   const data = yield call(readData);
   yield put({ type: "WRITE_DATA", payload: data });
}

export function* writeSaga(value) {
   let data = value.storage;
   data = data[data.length - 1];
   yield sendData(data);
}

export function* clearSaga() {
   const data = yield call(readData);
   // eslint-disable-next-line array-callback-return
   yield data.map((value) => {
      deleteData(value.id);
   });
}

export function* deleteItemSaga(index) {
   let data = yield call(readData);
   data = data[index.index];
   deleteData(data.id);
}

export function* editSaga(value) {
   let data = value.storage;
   data = data[value.index];
   yield editData(data, data.id);
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
   yield takeLatest("readData", readSaga);
   yield takeLatest("Submit", writeSaga);
   yield takeLatest("clear", clearSaga);
   yield takeLatest("edit", editSaga);
   yield takeLatest("deleteItem", deleteItemSaga);
}

export default function* rootSaga() {
   yield watchClickSaga();
}
