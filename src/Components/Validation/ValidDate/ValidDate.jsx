import React from "react";
import { useDispatch } from "react-redux";
import validation from "../validation.module.css";

const ValidDate = ({
   validFail,
   validationDate,
   value,
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
            type="date"
            className={
               (validFail === true && validationDate(outputValue) === false
                  ? validation.input + " " + validation.error
                  : validation.input)
            }
         ></input>

            {validFail === true && validationDate(outputValue) === false && (
            <div className={validation.distance + " " + validation.validation}>
               <label>Заполните поле!</label>
            </div>
         )}
      </>
   );
};
export default ValidDate;
