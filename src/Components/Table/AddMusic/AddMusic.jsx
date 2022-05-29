import React from "react";
import main from "../../Main/main.module.css";
import Form from "../../Form/Form";
import addMusic from "./addMusic.module.css";

const AddMusic = ({
   storage,
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
   edit,
   setEdit,
}) => {
   return (
      <>
         <input
            onClick={() => setOpen(true)}
            type="button"
            className={main.btn + " " + addMusic.btn}
            defaultValue="добавить"
         ></input>
         {open === true && (
            <Form
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
               edit={edit}
               setEdit={setEdit}
            />
         )}
      </>
   );
};
export default AddMusic;
