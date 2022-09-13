import React from "react";
import { useSelector } from "react-redux";
import editValidation from "../../../utils/validation/editValidation";
import validation from "../validation.module.css";

const ValidDate = ({ validationDate, initialValue, outputValue, setValue }) => {
   const edit = useSelector((state) => state.interfaceActions.edit);
   const validFail = useSelector((state) => state.interfaceActions.valid);

   if (edit === true) {
      outputValue = editValidation(outputValue, initialValue);
   }

   const changeValue = (event) => {
      setValue(event.target.value);
   };

   return (
      <>
         <input
            defaultValue={initialValue}
            onChange={changeValue}
            type="date"
            className={
               validationDate(outputValue) === false && validFail === false
                  ? validation.input + " " + validation.error
                  : validation.input
            }
         ></input>
         <>
            {validationDate(outputValue) === false && validFail === false && (
               <div
                  className={validation.distance + " " + validation.validation}
               >
                  <label>Используются неккоректные символы!</label>
               </div>
            )}
         </>
      </>
   );
};
export default ValidDate;
