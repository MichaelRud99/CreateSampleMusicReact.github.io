async function requestStorageComposition() {
   const requestStorage = await fetch("http://localhost:3000/storage");
   const data = await requestStorage.json();
   return data;
}

export default requestStorageComposition;
