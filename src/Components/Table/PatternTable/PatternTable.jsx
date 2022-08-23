import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import table from "./table.module.css";
import AddMusic from "../AddMusic/AddMusic";
import DeleteAll from "../DeleteAll/DeleteAll";
import PatternTr from "../PatternTr/PatternTr";
import Search from "../Search/Search";
import Reset from "../Reset/Reset";

const PatternTable = ({ storage, setStorage, setOpen, open }) => {
   const [checkSearch, setCheckSearch] = useState("all");
   const [searchValue, setSearchValue] = useState("");
   const [storageSearch, setStorageSearch] = useState("");

   return (
      <div className={table.frame}>
         <BrowserRouter>
            <Routes>
               <Route
                  path="/monsegard3.github.io/"
                  element={
                     <div className={table.flex}>
                        <Search
                           setCheckSearch={setCheckSearch}
                           storageSearch={storageSearch}
                           searchValue={searchValue}
                           setSearchValue={setSearchValue}
                           setStorageSearch={setStorageSearch}
                        />

                        <div className={table.divBtn}>
                           {(checkSearch === "found" ||
                              checkSearch === "notFound") && (
                              <Reset
                                 setCheckSearch={setCheckSearch}
                                 setSearchValue={setSearchValue}
                              />
                           )}
                           <DeleteAll setStorage={setStorage} />
                           <AddMusic
                              storage={storage}
                              setOpen={setOpen}
                              open={open}
                           />
                        </div>
                     </div>
                  }
               />
            </Routes>
         </BrowserRouter>

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
                           key={value.id}
                           id={value.id}
                           index={index}
                           author={value.author}
                           track={value.track}
                           album={value.album}
                           albumPhoto={value.albumPhoto}
                           dataRelease={value.dataRelease}
                        />
                     );
                  })}

               {checkSearch === "found" &&
                  storageSearch.map((value, index) => {
                     return (
                        <PatternTr
                           storage={storage}
                           setStorage={setStorage}
                           key={value.id}
                           id={value.id}
                           index={index}
                           author={value.author}
                           track={value.track}
                           album={value.album}
                           albumPhoto={value.albumPhoto}
                           dataRelease={value.dataRelease}
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
