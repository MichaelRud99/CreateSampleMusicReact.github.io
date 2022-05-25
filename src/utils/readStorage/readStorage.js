const readStorage = (name) => {
   let storage = [];
   if (JSON.parse(localStorage.getItem(name)) !== null) {
      storage = JSON.parse(localStorage.getItem(name));
   }
   return storage;
};
export default readStorage;
