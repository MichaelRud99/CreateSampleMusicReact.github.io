const searchLetters = (storage, searchValue, setStorageSearch, value) => {
   let foundArr = [];
   const letterSearch = searchValue.split("");
   let count = 0;
   for (let i = 0; i < value.length; i++) {
      let letters = value[i].toLowerCase().split("");

      for (let j = 0; j < searchValue.length; j++) {
         if (letters[j] === letterSearch[j]) {
            count++;
         } else {
            break;
         }
      }
      if (count === searchValue.length) {
         foundArr.push(value[i]);
      }
      count = 0;
   }

   const uniqueArray = foundArr.filter(function (item, pos) {
      return foundArr.indexOf(item) === pos;
   });
   return uniqueArray;
};
export default searchLetters;
