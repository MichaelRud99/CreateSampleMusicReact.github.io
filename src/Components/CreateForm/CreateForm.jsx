import React from "react";
import PatternForm from "../PatternForm/PatternForm";
import { useDispatch, useSelector } from "react-redux";
import validation from "../../utils/validation/validation";
import { validFalse } from "../../utils/redux/ValidFailSlice";

import { useActions } from "../Hooks/useActotion";
import { inputFieldsSlice } from "../../utils/redux/inputFieldsSlice";

const CreateForm = ({ storage, setOpen }) => {
   const inputFields = useActions(inputFieldsSlice.actions);

   /* времнно оставим dispatch */
   const dispatch = useDispatch();
   
   const enter = useSelector((state) => state.inputFields);
   const albumPhoto = enter.albumPhoto;
   const album = enter.album;
   const author = enter.author;
   const dataRelease = enter.dataRelease;
   const track = enter.track;

   const submit = (event) => {
      if (validation(author, track, album, dataRelease) === true) {
         let tmp = {};
         const rnd = Math.random() * 10;
         tmp.id = Math.round((Math.random() * 10000) / rnd);
         tmp.author = author;
         tmp.dataRelease = dataRelease;
         tmp.track = track;
         tmp.album = album;
         tmp.albumPhoto = albumPhoto;
         storage[storage.length] = tmp;
         inputFields.enterClear();
         dispatch({ type: "Submit", storage });
         setOpen(false);
      } else {
         dispatch(validFalse());
         event.preventDefault();
      }
   };

   return <PatternForm storage={storage} setOpen={setOpen} submit={submit} />;
};
export default CreateForm;
