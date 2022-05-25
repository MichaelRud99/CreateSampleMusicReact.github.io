import React from "react";
import validationText from "../../utils/validationText/validationText";
import validationDate from "../../utils/validationDate/validationDate";
import PatternForm from "../PatternForm/PatternForm";

const Form = ({
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
}) => {
   const submit = () => {
      if (
         validationText(author) === true &&
         validationText(track) === true &&
         validationText(album) === true &&
         validationDate(dataRelease) === true
      ) {
         let tmp = {};
         tmp.id = Math.round(Math.random() * 10000);
/*          tmp.search = false; */
         tmp.author = author;
         tmp.dataRelease = dataRelease;
         tmp.track = track;
         tmp.album = album;
         storage[storage.length] = tmp;
         localStorage.setItem("storage", JSON.stringify(storage));
         setOpen(false);
         setAuthor("");
         setDataRelease("");
         setTrack("");
         setAlbom("");
         setValidFail(false);
      } else {
         setValidFail(true);
      }
   };

   return (
      <PatternForm
         storage={storage}
         setOpen={setOpen}
         author={author}
         setAuthor={setAuthor}
         dataRelease={dataRelease}
         setDataRelease={setDataRelease}
         track={track}
         setTrack={setTrack}
         album={album}
         setAlbom={setAlbom}
         validFail={validFail}
         setValidFail={setValidFail}
         submit={submit}
      />
   );
};
export default Form;
