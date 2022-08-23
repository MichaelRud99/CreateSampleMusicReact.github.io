import React from "react";
import readStorage from "../../../utils/readStorage";
import search from "./search.module.css";
import { useSearchParams } from "react-router-dom";
import searchLetters from "../../../utils/searchLetters/searchLetters";

const Search = ({
   searchValue,
   setSearchValue,
   setCheckSearch,
   setStorageSearch,
}) => {
   let [, setSearchParams] = useSearchParams();

   const changes = (event) => {
      setSearchValue(event.target.value);
   };

   const submit = (event) => {
      const storage = readStorage("storage");
      searchValue = searchValue.toLowerCase();

      const searchId = storage.filter((element) => element.id === searchValue);
      const SearchAuthor = storage.map((value) => value.author.toLowerCase());
      const SearchTrack = storage.map((value) => value.track.toLowerCase());
      const SearchAlbum = storage.map((value) => value.album.toLowerCase());
      let currentStorage = [];
      let answer = [];
      let uniqueArray = [];

      if (event.target.value === "") {
         setCheckSearch("all");
      } else if (searchId.length > 0) {
         setStorageSearch(searchId);
         setCheckSearch("found");
      } else if (
         searchLetters(storage, searchValue, setStorageSearch, SearchAuthor)
            .length > 0
      ) {
         uniqueArray = searchLetters(
            storage,
            searchValue,
            setStorageSearch,
            SearchAuthor
         );
         for (let w = 0; w < uniqueArray.length; w++) {
            const storageSearch = storage.filter(
               (element) => element.author.toLowerCase() === uniqueArray[w]
            );
            answer = currentStorage.concat(storageSearch);
            currentStorage = storageSearch;
         }
         setStorageSearch(answer);
         setCheckSearch("found");
      } else if (
         searchLetters(storage, searchValue, setStorageSearch, SearchTrack)
            .length > 0
      ) {
         uniqueArray = searchLetters(
            storage,
            searchValue,
            setStorageSearch,
            SearchTrack
         );
         for (let w = 0; w < uniqueArray.length; w++) {
            const storageSearch = storage.filter(
               (element) => element.track.toLowerCase() === uniqueArray[w]
            );
            answer = currentStorage.concat(storageSearch);
            currentStorage = storageSearch;
         }
         setStorageSearch(answer);
         setCheckSearch("found");
      } else if (
         searchLetters(storage, searchValue, setStorageSearch, SearchAlbum)
            .length > 0
      ) {
         uniqueArray = searchLetters(
            storage,
            searchValue,
            setStorageSearch,
            SearchAlbum
         );
         for (let w = 0; w < uniqueArray.length; w++) {
            const storageSearch = storage.filter(
               (element) => element.album.toLowerCase() === uniqueArray[w]
            );
            answer = currentStorage.concat(storageSearch);
            currentStorage = storageSearch;
         }
         setStorageSearch(answer);
         setCheckSearch("found");
      } else {
         setCheckSearch("notFound");
      }

      let Search = searchValue;
      if (Search) {
         setSearchParams({ Search });
      } else {
         setSearchParams({});
      }
   };

   const keyUp = (event) => {
      if (event.code === "Enter") {
         submit(event);
      }
   };

   return (
      <div className={search.div_border}>
         <button
            className={search.img}
            onClick={() => document.querySelector("input").focus()}
         />
         <input
            type="text"
            placeholder="поиск..."
            onChange={changes}
            value={searchValue}
            className={search.input}
            onKeyDownCapture={keyUp}
         />
      </div>
   );
};

export default Search;
