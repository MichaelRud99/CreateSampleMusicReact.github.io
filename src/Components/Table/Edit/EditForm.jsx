import PatternForm from "../../PatternForm/PatternForm";
import { useSelector } from "react-redux";
import editValidation from "../../../utils/validation/editValidation";
import validation from "../../../utils/validation/validation";
import { validFailSlice } from "../../../utils/redux/slices/ValidFailSlice";
import { editSlice } from "../../../utils/redux/slices/editSlice";
import { inputFieldsSlice } from "../../../utils/redux/slices/inputFieldsSlice";

import { useActions } from "../../Hooks/useActotion";
import { sagaSlice } from "../../../utils/redux/slices/sagaSlice";

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
   const slice = useActions([
      inputFieldsSlice.actions,
      editSlice.actions,
      validFailSlice.actions,
      sagaSlice.actions,
   ]);

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
         setStorage(() => readStorage("storage"));
         slice[0].enterClear();
         slice[1].editFalse();
         slice[3].sagaEdit(storage[index]);
      } else {
         slice[2].validFalse();
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
            setStorage={setStorage}
         />
      </>
   );
};

export default EditForm;
