import React from "react";
import PatternForm from "../PatternForm/PatternForm";
import { useDispatch, useSelector } from "react-redux";
import validation from "../../utils/validation/validation";
import { enterAuthor } from "../../utils/redux/inputFields/authorSlice";
import { enterTrack } from "../../utils/redux/inputFields/trackSlice";
import { enterAlbum } from "../../utils/redux/inputFields/albumSlice";
import { enterDataRelease } from "../../utils/redux/inputFields/dataReleaseSlice";
import { validFalse } from "../../utils/redux/ValidFailSlice";

const CreateForm = ({ storage, setOpen }) => {
   const dispatch = useDispatch();
   const enter = useSelector((state) => state);
   const author = enter.author.value;
   const track = enter.track.value;
   const album = enter.album.value;
   const albumPhoto = enter.albumPhoto.value;
   const dataRelease = enter.dataRelease.value;

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
         dispatch(enterAuthor(undefined));
         dispatch(enterTrack(undefined));
         dispatch(enterAlbum(undefined));
         dispatch(enterDataRelease(undefined));
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
