import PatternForm from "../../PatternForm/PatternForm";
import { useSelector, useDispatch } from "react-redux";
import editValidation from "../../../utils/validation/editValidation";
import validation from "../../../utils/validation/validation";
import { validFalse } from "../../../utils/redux/ValidFailSlice";
import { editFalse } from "../../../utils/redux/editSlice";

import { inputFieldsSlice } from "../../../utils/redux/inputFieldsSlice";
import { useActions } from "../../Hooks/useActotion";

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
   const inputFields = useActions(inputFieldsSlice.actions);
   const enter = useSelector((state) => state.inputFields);
   let editAlbum = enter.album;
   let editAuthor = enter.author;
   let editDataRelease = enter.dataRelease;
   let editTrack = enter.track;

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
         setStorage(()=>readStorage("storage"));
         inputFields.enterClear();
         dispatch(editFalse());

         dispatch({ type: "edit",storage, index });
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
            index={index}
         />
      </>
   );
};

export default EditForm;
