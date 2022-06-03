import React from "react";
import validation from "../validation.module.css";
import { useDispatch } from "react-redux";

const ValidText = ({
   validFail,
   validationText,
   initialValue,
   outputValue,
   setValue,
}) => {
   const dispath = useDispatch();

   const changeValue = (event) => {
      dispath(setValue(event.target.value));
   };

   return (
      <>
         <input
            autoFocus
            defaultValue={initialValue}
            onChange={changeValue}
            type="text"
            className={
               (validFail === true && validationText(outputValue) === false)
                  ? (validation.input + " " + validation.error)
                  : validation.input
            }
         ></input>

         {validFail === true && validationText(outputValue) === false && (
            <div className={validation.distance + " " + validation.validation}>
               <label>Используются неккоректные символы!</label>
            </div>
         )}
      </>
   );
};
export default ValidText;
