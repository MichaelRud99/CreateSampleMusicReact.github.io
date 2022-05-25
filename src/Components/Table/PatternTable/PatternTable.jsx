import React, { useState } from "react";
import table from "./table.module.css";
import AddMusic from "../AddMusic/AddMusic";
import DeleteAll from "../DeleteAll/DeleteAll";
import PatternTr from "../PatternTr/PatternTr";
import Search from "../Search/Search";
import Reset from "../Reset/Reset";
import readStorage from "../../../utils/readStorage";

const PatternTable = ({
   setStorage,
   setOpen,
   open,
   author,
   setAuthor,
   dataRelease,
   setDataRelease,
   track,
   setTrack,
   album,
   setAlbom,
   validFail,
   setValidFail,
}) => {
   const storage = readStorage("storage");
   const [checkSearch, setCheckSearch] = useState("all");
   const [searchValue, setSearchValue] = useState("");
   const [storageSearch, setStorageSearch] = useState("");

   return (
      <div className={table.frame}>
         <div className={table.flex}>
            <Search
               setCheckSearch={setCheckSearch}
               searchValue={searchValue}
               setSearchValue={setSearchValue}
               storageSearch={storageSearch}
               setStorageSearch={setStorageSearch}
            />
            <div className={table.divBtn}>
               {(checkSearch === "found" || checkSearch === "notFound") && (
                  <Reset storage={storage} setCheckSearch={setCheckSearch} />
               )}
               <DeleteAll setStorage={setStorage} />
               <AddMusic
                  storage={storage}
                  setOpen={setOpen}
                  open={open}
                  author={author}
                  setAuthor={setAuthor}
                  dataRelease={dataRelease}
                  setDataRelease={setDataRelease}
                  track={track}
                  setTrack={setTrack}
                  album={album}
                  setAlbom={setAlbom}
                  validFail={validFail}
                  setValidFail={setValidFail}
               />
            </div>
         </div>

         <table className={table.table}>
            <thead>
               <tr>
                  <th className={table.id}>id</th>
                  <th className={table.length}>Исполнитель</th>
                  <th className={table.length}>Название композиции</th>
                  <th className={table.length}>Альбом</th>
                  <th className={table.yearRealeas}>Год релиза</th>
                  <th className={table.fastView}>Просмотр</th>
                  <th className={table.delete}>Изменить</th>
               </tr>
            </thead>
            <tbody>
               {checkSearch === "all" &&
                  storage.map((value, index) => {
                     return (
                        <PatternTr
                           storage={storage}
                           setStorage={setStorage}
                           setOpen={setOpen}
                           index={index}
                           key={value.id}
                           id={value.id}
                           author={value.author}
                           setAuthor={setAuthor}
                           track={value.track}
                           setTrack={setTrack}
                           album={value.album}
                           setAlbom={setAlbom}
                           dataRelease={value.dataRelease}
                           setDataRelease={setDataRelease}
                           validFail={validFail}
                           setValidFail={setValidFail}
                        />
                     );
                  })}

               {checkSearch === "found" &&
                  storageSearch.map((value, index) => {
                     return (
                        <PatternTr
                           storage={storage}
                           setStorage={setStorage}
                           setOpen={setOpen}
                           index={index}
                           key={value.id}
                           id={value.id}
                           author={value.author}
                           setAuthor={setAuthor}
                           track={value.track}
                           setTrack={setTrack}
                           album={value.album}
                           setAlbom={setAlbom}
                           dataRelease={value.dataRelease}
                           setDataRelease={setDataRelease}
                           validFail={validFail}
                           setValidFail={setValidFail}
                        />
                     );
                  })}
            </tbody>
         </table>
         {checkSearch === "notFound" && (
            <div className={table.notFound}>
               По вашему запросу ничего не найдено
            </div>
         )}
      </div>
   );
};

export default PatternTable;
