import React from "react";
import btnCreate from "./btnCreate.module.css";
import main from "../Main/main.module.css";
import Form from "../Form/Form";

const BtnCreate = ({
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
            className={main.btn + " " + btnCreate.btn}
            defaultValue="создать"
            type="button"
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

export default BtnCreate;
