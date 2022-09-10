import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../Hooks/useActotion";
import validation from "../../utils/validation/validation";
import PatternForm from "../PatternForm/PatternForm";

import { validFailSlice } from "../../utils/redux/slices/ValidFailSlice";
import { inputFieldsSlice } from "../../utils/redux/slices/inputFieldsSlice";
import { listCompositionSlice } from "../../utils/redux/slices/listComposition";

const CreateForm = ({ storage, setStorage, setOpen }) => {
   const slice = useActions([
      inputFieldsSlice.actions,
      validFailSlice.actions,
      listCompositionSlice.actions,
   ]);

   const state = useSelector((state) => state.inputFields);
   const albumPhoto = state.albumPhoto;
   const album = state.album;
   const author = state.author;
   const dataRelease = state.dataRelease;
   const track = state.track;

   const submit = (event) => {
      if (validation(author, track, album, dataRelease) === true) {
         let tmp = {};
         const cloneStorage = structuredClone(storage);
         const rnd = Math.random() * 10;
         tmp.id = Math.round((Math.random() * 10000) / rnd);
         tmp.author = author;
         tmp.dataRelease = dataRelease;
         tmp.track = track;
         tmp.album = album;
         tmp.albumPhoto = albumPhoto;
         cloneStorage[cloneStorage.length] = tmp;
         slice[0].enterClear();
         slice[2].submit(tmp);
         slice[1].validTrue();
         setOpen(false);
      } else {
         slice[1].validFalse();
         event.preventDefault();
      }
   };

   return (
      <PatternForm
         storage={storage}
         setStorage={setStorage}
         setOpen={setOpen}
         submit={submit}
      />
   );
};
export default CreateForm;
