import PatternForm from "../../PatternForm/PatternForm";
import { useSelector, useDispatch } from "react-redux";
import editValidation from "../../../utils/validation/editValidation";
import validation from "../../../utils/validation/validation";
import { enterAuthor } from "../../../utils/redux/inputFields/authorSlice";
import { enterTrack } from "../../../utils/redux/inputFields/trackSlice";
import { enterAlbum } from "../../../utils/redux/inputFields/albumSlice";
import { enterDataRelease } from "../../../utils/redux/inputFields/dataReleaseSlice";
import { validFalse } from "../../../utils/redux/ValidFailSlice";
import { editFalse } from "../../../utils/redux/editSlice";

import readStorage from "../../../utils/readStorage";

const EditForm = ({
   storage,
   setStorage,
   author,
   dataRelease,
   track,
   album,
   index,
}) => {
   const dispatch = useDispatch();
   const enter = useSelector((state) => state);
   let editAuthor = enter.author.value;
   let editTrack = enter.track.value;
   let editAlbum = enter.album.value;
   let editDataRelease = enter.dataRelease.value;

   const submit = (event) => {
      editAuthor = editValidation(editAuthor, author);
      editTrack = editValidation(editTrack, track);
      editAlbum = editValidation(editAlbum, album);
      editDataRelease = editValidation(editDataRelease, dataRelease);

      if (
         validation(editAuthor, editTrack, editAlbum, editDataRelease) === true
      ) {
         storage[index].author = editValidation(editAuthor, author);
         storage[index].track = editValidation(editTrack, track);
         storage[index].album = editValidation(editAlbum, album);
         storage[index].dataRelease = editValidation(
            editDataRelease,
            dataRelease
         );

         localStorage.setItem("storage", JSON.stringify(storage));
         setStorage(readStorage("storage"));

         dispatch(enterAuthor(undefined));
         dispatch(enterTrack(undefined));
         dispatch(enterAlbum(undefined));
         dispatch(enterDataRelease(undefined));
         dispatch(editFalse());
      } else {
         dispatch(validFalse());
         event.preventDefault();
      }
   };

   return (
      <>
         <PatternForm
            storage={storage}
            author={author}
            dataRelease={dataRelease}
            track={track}
            album={album}
            submit={submit}
         />
      </>
   );
};

export default EditForm;
