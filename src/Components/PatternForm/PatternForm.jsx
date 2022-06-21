import React from "react";
import { Link } from "react-router-dom";
import patternForm from "./patternForm.module.css";
import main from "../Main/main.module.css";
import validationText from "../../utils/validation/validationText/validationText";
import validationDate from "../../utils/validation/validationDate/validationDate";
import ValidText from "../Validation/ValidText/ValidText";
import ValidDate from "../Validation/ValidDate/ValidDate";
import { enterAuthor } from "../../utils/redux/inputFields/authorSlice";
import { enterAlbum } from "../../utils/redux/inputFields/albumSlice";
import { enterDataRelease } from "../../utils/redux/inputFields/dataReleaseSlice";
import { enterTrack } from "../../utils/redux/inputFields/trackSlice";
import { useDispatch, useSelector } from "react-redux";
import { editFalse } from "../../utils/redux/editSlice";
import { validTrue } from "../../utils/redux/ValidFailSlice";
import DeleteItem from "./DeleteItem/DeleteItem";

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
   const outputAuthor = useSelector((state) => state.author.value);
   const outputDataRelease = useSelector((state) => state.dataRelease.value);
   const outputTrack = useSelector((state) => state.track.value);
   const outputAlbum = useSelector((state) => state.album.value);
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
                  setValue={enterAuthor}
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
                  setValue={enterDataRelease}
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
                  setValue={enterTrack}
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
                  setValue={enterAlbum}
               />
            </div>

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

                     <DeleteItem
                        storage={storage}
                        index={index}
                     />
                  </>
               )}
            </div>
         </form>
      </section>
   );
};

export default PatternForm;
