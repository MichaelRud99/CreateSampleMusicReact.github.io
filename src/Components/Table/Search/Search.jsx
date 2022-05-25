import React from "react";
import readStorage from "../../../utils/readStorage";
import search from "./search.module.css";

const Search = ({
   searchValue,
   setSearchValue,
   setCheckSearch,
   storageSearch,
   setStorageSearch,
}) => {
   const changes = (event) => {
      setSearchValue(event.target.value);
   };

   const submit = (event) => {
      const storage = readStorage("storage");

      const storageSearchId = storage.filter(
         (element) => element.id === Number(searchValue)
      );
      const storageSearchAuthor = storage.filter(
         (element) => element.author === searchValue
      );
      const storageSearchTrack = storage.filter(
         (element) => element.track === searchValue
      );
      const storageSearchAlbum = storage.filter(
         (element) => element.album === searchValue
      );

      if (event.target.value === "") {
         setCheckSearch("all");
      } else if (storageSearchId.length > 0) {
         setStorageSearch(storageSearchId);
         setCheckSearch("found");
      } else if (storageSearchAuthor.length > 0) {
         setStorageSearch(storageSearchAuthor);
         setCheckSearch("found");
      } else if (storageSearchAlbum.length > 0) {
         setStorageSearch(storageSearchAlbum);
         setCheckSearch("found");
      } else if (storageSearchTrack.length > 0) {
         setStorageSearch(storageSearchTrack);
         setCheckSearch("found");
      } else {
         setCheckSearch("notFound");
      }

      setSearchValue("");
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
