import React, { useState } from "react";
import main from "./main.module.css";
import BtnCreate from "../BtnCreate";
import readStorage from "../../utils/readStorage";
import PatternTable from "../Table/PatternTable/PatternTable";

const Main = () => {
   const [isOpen, setOpen] = useState(false);
   const [storage, setStorage] = useState(() => readStorage("storage"));
   const [author, setAuthor] = useState("");
   const [dataRelease, setDataRelease] = useState("");
   const [track, setTrack] = useState("");
   const [album, setAlbom] = useState("");
   const [validFail, setValidFail] = useState(false);
   const [edit, setEdit] = useState(true);

   return (
      <>
         {storage.length === 0 ? (
            <section className={main.flex}>
               <h1 className={main.title}>
                  Создайте свою подборку музыкальных произведений
               </h1>
               <BtnCreate
                  storage={storage}
                  setOpen={setOpen}
                  open={isOpen}
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
                  edit={edit}
                  setEdit={setEdit}
               />
            </section>
         ) : (
            <section className={main.section}>
               <div className={main.subtitle}>
                  Ваша подборка музыкальных композиций
               </div>
               <PatternTable
                  setStorage={setStorage}
                  setOpen={setOpen}
                  open={isOpen}
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
                  edit={edit}
                  setEdit={setEdit}
               />
            </section>
         )}
      </>
   );
};
export default Main;
