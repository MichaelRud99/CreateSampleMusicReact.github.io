import React, { useState } from "react";
import editCss from "./edit.module.css";
import patternForm from "../../PatternForm/patternForm.module.css";
import PatternForm from "../../PatternForm/PatternForm";

const Edit = ({
   storage,
   setOpen,
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
   index,
}) => {
   const [edit, setEdit] = useState(false);

   const submit = () => {
      storage[index].author = author;
      storage[index].track = track;
      storage[index].album = album;
      storage[index].dataRelease = dataRelease;
      localStorage.setItem("storage", JSON.stringify(storage));
      setEdit(false);
   };

   return (
      <>
         <button
            onClick={() => setEdit(true)}
            className={patternForm.btn + " " + editCss.edit}
         ></button>
         {edit === true && (
            <PatternForm
               storage={storage}
               setOpen={setEdit}
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
               submit={submit}
            />
         )}
      </>
   );
};

export default Edit;

                         
