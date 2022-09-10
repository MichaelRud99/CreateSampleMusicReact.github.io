import PatternForm from "../../PatternForm/PatternForm";
import { useSelector } from "react-redux";
import editValidation from "../../../utils/validation/editValidation";
import validation from "../../../utils/validation/validation";
import { validFailSlice } from "../../../utils/redux/slices/ValidFailSlice";
import { editSlice } from "../../../utils/redux/slices/editSlice";
import { inputFieldsSlice } from "../../../utils/redux/slices/inputFieldsSlice";
import { useActions } from "../../Hooks/useActotion";
import { listCompositionSlice } from "../../../utils/redux/slices/listComposition";
import { openOutletSlise } from "../../../utils/redux/slices/openOutletSlise";

const EditForm = ({
   storage,
   setStorage,
   author,
   dataRelease,
   track,
   album,
   index,
   setOpen,
}) => {
   const slice = useActions([
      inputFieldsSlice.actions,
      editSlice.actions,
      validFailSlice.actions,
      listCompositionSlice.actions,
      openOutletSlise.actions,
   ]);

   const enter = useSelector((state) => state.inputFields);
   let editAlbum = enter.album;
   let editAuthor = enter.author;
   let editDataRelease = enter.dataRelease;
   let editTrack = enter.track;
   const cloneStorage = structuredClone(storage);

   const submit = (event) => {
      editAuthor = editValidation(editAuthor, author);
      editTrack = editValidation(editTrack, track);
      editAlbum = editValidation(editAlbum, album);
      editDataRelease = editValidation(editDataRelease, dataRelease);

      if (
         validation(editAuthor, editTrack, editAlbum, editDataRelease) === true
      ) {
         cloneStorage[index].author = editValidation(editAuthor, author);
         cloneStorage[index].track = editValidation(editTrack, track);
         cloneStorage[index].album = editValidation(editAlbum, album);
         cloneStorage[index].dataRelease = editValidation(
            editDataRelease,
            dataRelease
         );

         localStorage.setItem("storage", JSON.stringify(storage));
         setStorage(cloneStorage);
         slice[0].enterClear();
         slice[1].editFalse();
         slice[3].sagaEdit(cloneStorage[index]);
         slice[4].openTrue();
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
            setOpen={setOpen}
         />
      </>
   );
};

export default EditForm;
