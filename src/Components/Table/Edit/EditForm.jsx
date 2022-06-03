import PatternForm from "../../PatternForm/PatternForm";
import { useSelector, useDispatch } from "react-redux";
import editValidation from "../../../utils/validation/editValidation";
import validation from "../../../utils/validation/validation";
import { enterAuthor } from "../../../utils/redux/inputFields/authorSlice";
import { enterTrack } from "../../../utils/redux/inputFields/trackSlice";
import { enterAlbum } from "../../../utils/redux/inputFields/albumSlice";
import { enterDataRelease } from "../../../utils/redux/inputFields/dataReleaseSlice";

const EditForm = ({
   storage,
   author,
   dataRelease,
   track,
   album,
   validFail,
   setValidFail,
   index,
   edit,
   setEdit,
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
         setEdit(true);
         setValidFail(false);

         dispatch(enterAuthor(undefined));
         dispatch(enterTrack(undefined));
         dispatch(enterAlbum(undefined));
         dispatch(enterDataRelease(undefined));
      } else {
         setValidFail(true);
         event.preventDefault();
      }
   };

   return (
      <>
         <PatternForm
            storage={storage}
            setOpen={setEdit}
            author={author}
            dataRelease={dataRelease}
            track={track}
            album={album}
            validFail={validFail}
            setValidFail={setValidFail}
            submit={submit}
            edit={edit}
            setEdit={setEdit}
         />
      </>
   );
};

export default EditForm;
