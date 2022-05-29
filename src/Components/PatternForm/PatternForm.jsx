import React from "react";
import { Link } from "react-router-dom";
import patternForm from "./patternForm.module.css";
import main from "../Main/main.module.css";
import validationText from "../../utils/validationText/validationText";
import validationDate from "../../utils/validationDate/validationDate";
import ValidText from "../Validation/ValidText/ValidText";
import ValidDate from "../Validation/ValidDate/ValidDate";

const PatternForm = ({
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
   submit,
   edit,
   setEdit,
}) => {
   return (
      <section className={patternForm.body}>
         <div className={patternForm.move}>
            {edit === true ? (
               <button
                  onClick={() => setOpen(false)}
                  className={patternForm.btn + " " + patternForm.close}
               ></button>
            ) : (
               <Link
                  onClick={() => setEdit(true)}
                  className={patternForm.btn + " " + patternForm.close}
                  to="/monsegard3.github.io/"
               ></Link>
            )}
         </div>
         <form className={patternForm.form}>
            <div>
               <div className={patternForm.distance}>
                  <label>Исполнитель</label>
               </div>
               <ValidText
                  validFail={validFail}
                  validationText={validationText}
                  value={author}
                  setValue={setAuthor}
               />
            </div>

            <div>
               <div className={patternForm.distance}>
                  <label>Дата выпуска</label>
               </div>
               <ValidDate
                  validFail={validFail}
                  validationDate={validationDate}
                  value={dataRelease}
                  setValue={setDataRelease}
               />
            </div>
            <div>
               <div className={patternForm.distance}>
                  <label>название композиции</label>
               </div>
               <ValidText
                  validFail={validFail}
                  validationText={validationText}
                  value={track}
                  setValue={setTrack}
               />
            </div>

            <div>
               <div className={patternForm.distance}>
                  <label>Альбом</label>
               </div>
               <ValidText
                  validFail={validFail}
                  validationText={validationText}
                  value={album}
                  setValue={setAlbom}
               />
            </div>

            <div className={patternForm.btnFooter}>
               {edit === true ? (
                  <input
                     onClick={submit}
                     className={main.btn + " " + patternForm.add}
                     defaultValue="добавить"
                     type="button"
                  ></input>
               ) : (
                  <Link
                     onClick={submit}
                     className={main.btn + " " + patternForm.add}
                     to="/monsegard3.github.io/"
                  >
                     Ввод
                  </Link>
               )}
            </div>
         </form>
      </section>
   );
};

export default PatternForm;
