import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../Hooks/useActotion";
import validation from "../../utils/validation/validation";
import PatternForm from "../PatternForm/PatternForm";

import { inputFieldsSlice } from "../../utils/redux/slices/inputFieldsSlice";
import { listCompositionSlice } from "../../utils/redux/slices/listComposition";
import { interfaceActionSlice } from "../../utils/redux/slices/interfaceActionSlice";

const CreateForm = ({ storage, setStorage, setOpen }) => {
   const slice = useActions([
      inputFieldsSlice.actions,
      listCompositionSlice.actions,
      interfaceActionSlice.actions,
   ]);

   const inputFields = useSelector((state) => state.inputFields);
   const albumPhoto = inputFields.albumPhoto;
   const album = inputFields.album;
   const author = inputFields.author;
   const dataRelease = inputFields.dataRelease;
   const track = inputFields.track;

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
         slice[1].submit(tmp);
         slice[2].validTrue();
         setOpen(false);
      } else {
         slice[2].validFalse();
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
