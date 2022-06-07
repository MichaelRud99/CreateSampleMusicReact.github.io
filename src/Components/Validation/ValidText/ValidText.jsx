import React from "react";
import validation from "../validation.module.css";
import { useDispatch, useSelector } from "react-redux";
import editValidation from "../../../utils/validation/editValidation";

const ValidText = ({ validationText, initialValue, outputValue, setValue }) => {
   const dispath = useDispatch();
   const edit = useSelector((state) => state.edit.edit);
   const validFail = useSelector((state) => state.validFail.valid);

   if (edit === true) {
      outputValue = editValidation(outputValue, initialValue);
   }

   const changeValue = (event) => {
      dispath(setValue(event.target.value));
   };

   return (
      <>
         <input
            defaultValue={initialValue}
            onChange={changeValue}
            type="text"
            className={
               validationText(outputValue) === false && validFail === false
                  ? validation.input + " " + validation.error
                  : validation.input
            }
         ></input>
         <>
            {validationText(outputValue) === false && validFail === false && (
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
export default ValidText;
