import React from "react";
import readStorage from "../../../utils/readStorage";
import patternTr from "./patternTr.module.css";
import View from "../View/View";
import Edit from "../Edit/Edit";

const PatternTr = ({
   storage,
   setStorage,
   setOpen,
   index,
   id,
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
   return (
      <tr>
         <td className={patternTr.id}>{id}</td>
         <td>{author}</td>
         <td>{track}</td>
         <td>{album}</td>
         <td>{dataRelease}</td>
         <td>
            <View
               id={id}
               author={author}
               track={track}
               album={album}
               dataRelease={dataRelease}
            />
         </td>
         <td>
            <Edit
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
               index={index}
            />
         </td>
      </tr>
   );
};
export default PatternTr;
