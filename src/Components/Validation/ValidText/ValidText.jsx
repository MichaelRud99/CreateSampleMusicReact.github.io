import React from "react";
import validation from "../validation.module.css";

const ValidText = ({ validFail, validationText, value, setValue }) => {
   const changeValue = (event) => {
      setValue(event.target.value);
   };

   return (
      <>
         {validFail === true && validationText(value) === false ? (
            <>
               <input
                  autoFocus
                  value={value}
                  onChange={changeValue}
                  type="text"
                  className={validation.input + " " + validation.error}
               ></input>
               <div
                  className={validation.distance + " " + validation.validation}
               >
                  <label>Используются неккоректные символы!</label>
               </div>
            </>
         ) : (
            <input
               autoFocus
               value={value}
               onChange={changeValue}
               type="text"
               className={validation.input}
            ></input>
         )}
      </>
   );
};
export default ValidText;
