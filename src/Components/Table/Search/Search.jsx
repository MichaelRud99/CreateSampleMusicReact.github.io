import React from "react";
import readStorage from "../../../utils/readStorage";
import search from "./search.module.css";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Search = ({
   searchValue,
   setSearchValue,
   setCheckSearch,
   storageSearch,
   setStorageSearch,
}) => {
   // eslint-disable-next-line no-unused-vars
   let [searchParams, setSearchParams] = useSearchParams();
   const dispatch = useDispatch();

   const changes = (event) => {
      setSearchValue(event.target.value);
      dispatch({ type: "жми" });
   };

   const submit = (event) => {
      const storage = readStorage("storage");
      searchValue = searchValue.toLowerCase();

      const storageSearchId = storage.filter(
         (element) => element.id === searchValue
      );
      const storageSearchAuthor = storage.filter(
         (element) => element.author.toLowerCase() === searchValue
      );
      const storageSearchTrack = storage.filter(
         (element) => element.track.toLowerCase() === searchValue
      );
      const storageSearchAlbum = storage.filter(
         (element) => element.album.toLowerCase() === searchValue
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
