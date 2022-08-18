import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../Hooks/useActotion";
import validation from "../../utils/validation/validation";
import PatternForm from "../PatternForm/PatternForm";

import { validFailSlice } from "../../utils/redux/slices/ValidFailSlice";
import { inputFieldsSlice } from "../../utils/redux/slices/inputFieldsSlice";
import { sagaSlice } from "../../utils/redux/slices/sagaSlice";

const CreateForm = ({ storage, setOpen }) => {
   const slice = useActions([
      inputFieldsSlice.actions,
      validFailSlice.actions,
      sagaSlice.actions,
   ]);

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
         slice[0].enterClear();
         slice[2].sagaSubmit(tmp);
         setOpen(false);
      } else {
         slice[1].validFalse();
         event.preventDefault();
      }
   };

   return <PatternForm storage={storage} setOpen={setOpen} submit={submit} />;
};
export default CreateForm;
