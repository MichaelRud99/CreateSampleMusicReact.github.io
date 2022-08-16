import React from "react";
import { Link } from "react-router-dom";
import patternForm from "./patternForm.module.css";
import main from "../Main/main.module.css";
import validationText from "../../utils/validation/validationText/validationText";
import validationDate from "../../utils/validation/validationDate/validationDate";
import ValidText from "../Validation/ValidText/ValidText";
import ValidDate from "../Validation/ValidDate/ValidDate";

import { useDispatch, useSelector } from "react-redux";
import { editFalse } from "../../utils/redux/editSlice";
import { validTrue } from "../../utils/redux/ValidFailSlice";
import DeleteItem from "./DeleteItem/DeleteItem";
import DownloadPhoto from "./DownloadPhoto/DownloadPhoto";

import { useActions } from "../Hooks/useActotion";
import { inputFieldsSlice } from "../../utils/redux/inputFieldsSlice";

const PatternForm = ({
   storage,
   index,
   setOpen,
   author,
   dataRelease,
   track,
   album,
   submit,
}) => {
   const outputFields = useActions(inputFieldsSlice.actions);
   const enter = useSelector((state) => state.inputFields);
   const outputAlbum = enter.album;
   const outputAuthor = enter.author;
   const outputDataRelease = enter.dataRelease;
   const outputTrack = enter.track;
   const edit = useSelector((state) => state.edit.edit);
   const dispatch = useDispatch();

   const editClose = () => {
      dispatch(editFalse());
      dispatch(validTrue());
   };

   return (
      <section className={patternForm.body}>
         <div className={patternForm.move}>
            {edit === false ? (
               <button
                  onClick={() => setOpen(false)}
                  className={patternForm.btn + " " + patternForm.close}
               ></button>
            ) : (
               <Link
                  onClick={editClose}
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
                  validationText={validationText}
                  initialValue={author}
                  outputValue={outputAuthor}
                  setValue={outputFields.enterAuthor}
               />
            </div>

            <div>
               <div className={patternForm.distance}>
                  <label>Дата выпуска</label>
               </div>
               <ValidDate
                  validationDate={validationDate}
                  initialValue={dataRelease}
                  outputValue={outputDataRelease}
                  setValue={outputFields.enterDataRelease}
               />
            </div>
            <div>
               <div className={patternForm.distance}>
                  <label>название композиции</label>
               </div>
               <ValidText
                  validationText={validationText}
                  initialValue={track}
                  outputValue={outputTrack}
                  setValue={outputFields.enterTrack}
               />
            </div>

            <div>
               <div className={patternForm.distance}>
                  <label>Альбом</label>
               </div>
               <ValidText
                  validationText={validationText}
                  initialValue={album}
                  outputValue={outputAlbum}
                  setValue={outputFields.enterAlbum}
               />
            </div>
            {edit === false && <DownloadPhoto />}
            <div className={patternForm.btnFooter}>
               {edit === false ? (
                  <input
                     onClick={submit}
                     className={main.btn + " " + patternForm.add}
                     defaultValue="добавить"
                     type="button"
                  ></input>
               ) : (
                  <>
                     <Link
                        onClick={submit}
                        className={main.btn + " " + patternForm.change}
                        to="/monsegard3.github.io/"
                     >
                        Изменить
                     </Link>

                     <DeleteItem storage={storage} index={index} />
                  </>
               )}
            </div>
         </form>
      </section>
   );
};

export default PatternForm;
