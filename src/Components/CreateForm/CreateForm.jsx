import React from "react";
import PatternForm from "../PatternForm/PatternForm";
import { useDispatch, useSelector } from "react-redux";
import validation from "../../utils/validation/validation";
import { enterAuthor } from "../../utils/redux/inputFields/authorSlice";
import { enterTrack } from "../../utils/redux/inputFields/trackSlice";
import { enterAlbum } from "../../utils/redux/inputFields/albumSlice";
import { enterDataRelease } from "../../utils/redux/inputFields/dataReleaseSlice";

const CreateForm = ({
   storage,
   setOpen,
   validFail,
   setValidFail,
   edit,
   setEdit,
}) => {
   const dispatch = useDispatch();
   const enter = useSelector((state) => state);
   const author = enter.author.value;
   const track = enter.track.value;
   const album = enter.album.value;
   const dataRelease = enter.dataRelease.value;

   const submit = () => {
      if (validation(author, track, album, dataRelease) === true) {
         let tmp = {};
         tmp.id = Math.round(Math.random() * 10000);
         tmp.author = author;
         tmp.dataRelease = dataRelease;
         tmp.track = track;
         tmp.album = album;
         storage[storage.length] = tmp;
         localStorage.setItem("storage", JSON.stringify(storage));

         dispatch(enterAuthor(undefined));
         dispatch(enterTrack(undefined));
         dispatch(enterAlbum(undefined));
         dispatch(enterDataRelease(undefined));

         setOpen(false);
         setValidFail(false);
      } else {
         setValidFail(true);
      }
   };

   return (
      <PatternForm
         storage={storage}
         setOpen={setOpen}
         validFail={validFail}
         setValidFail={setValidFail}
         submit={submit}
         edit={edit}
         setEdit={setEdit}
         enter={enter}
      />
   );
};
export default CreateForm;
