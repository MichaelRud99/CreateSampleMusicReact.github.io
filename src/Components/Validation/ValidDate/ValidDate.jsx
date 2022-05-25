import React from "react";
import validation from "../validation.module.css";

const ValidDate = ({ validFail, validationDate, value, setValue }) => {
   const changeValue = (event) => {
      setValue(event.target.value);
   };

   

   return (
      <>
         {validFail === true && validationDate(value) === false ? (
            <>
               <input
                  autoFocus
                  value={value}
                  onChange={changeValue}
                  type="date"
                  className={validation.input + " " + validation.error}
               ></input>
               <div
                  className={validation.distance + " " + validation.validation}
               >
                  <label>Заполните поле!</label>
               </div>
            </>
         ) : (
            <input
               autoFocus
               value={value}
               onChange={changeValue}
               type="date"
               className={validation.input}
            ></input>
         )}
      </>
   );
};
export default ValidDate;
