import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
   validFail,
   setValidFail,
   edit,
   setEdit,
}) => {
   const storage = readStorage("storage");
   const [checkSearch, setCheckSearch] = useState("all");
   const [searchValue, setSearchValue] = useState("");
   const [storageSearch, setStorageSearch] = useState("");

   /* path="/monsegard3.github.io/" для работы с роутами на github.io*/

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
                                 storage={storage}
                                 setCheckSearch={setCheckSearch}
                                 setSearchValue={setSearchValue}
                              />
                           )}
                           <DeleteAll setStorage={setStorage} />
                           <AddMusic
                              storage={storage}
                              setOpen={setOpen}
                              open={open}
                              validFail={validFail}
                              setValidFail={setValidFail}
                              edit={edit}
                              setEdit={setEdit}
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
                           setOpen={setOpen}
                           index={index}
                           key={value.id}
                           id={value.id}
                           author={value.author}
                           track={value.track}
                           album={value.album}
                           dataRelease={value.dataRelease}
                           validFail={validFail}
                           setValidFail={setValidFail}
                           edit={edit}
                           setEdit={setEdit}
                        />
                     );
                  })}

               {checkSearch === "found" &&
                  storageSearch.map((value, index) => {
                     return (
                        <PatternTr
                           storage={storage}
                           setOpen={setOpen}
                           index={index}
                           key={value.id}
                           id={value.id}
                           author={value.author}
                           track={value.track}
                           album={value.album}
                           dataRelease={value.dataRelease}
                           validFail={validFail}
                           setValidFail={setValidFail}
                           edit={edit}
                           setEdit={setEdit}
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
