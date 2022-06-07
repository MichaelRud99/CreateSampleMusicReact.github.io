import React from "react";
import main from "../../Main/main.module.css";
import CreateForm from "../../CreateForm/CreateForm";
import addMusic from "./addMusic.module.css";

const AddMusic = ({
   storage,
   setOpen,
   open,
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
            <CreateForm
               storage={storage}
               setOpen={setOpen}
               open={open}
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
