import PatternForm from "../../PatternForm/PatternForm";

const Edit = ({
   storage,
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
   index,
   edit,
   setEdit,
}) => {
   const submit = () => {
      storage[index].author = author;
      storage[index].track = track;
      storage[index].album = album;
      storage[index].dataRelease = dataRelease;
      localStorage.setItem("storage", JSON.stringify(storage));
      setEdit(true);
   };

   return (
      <>
         <PatternForm
            storage={storage}
            setOpen={setEdit}
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
            edit={edit}
            setEdit={setEdit}
         />
      </>
   );
};

export default Edit;
