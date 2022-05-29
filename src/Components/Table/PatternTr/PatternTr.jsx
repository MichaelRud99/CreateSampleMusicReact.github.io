import React from "react";
import patternTr from "./patternTr.module.css";
import View from "../View/View";
import Edit from "../Edit/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreView from "../View/PreView";
import PreEdit from "../Edit/PreEdit";

const PatternTr = ({
   storage,
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
   edit,
   setEdit,
}) => {
   return (
      <tr>
         <td className={patternTr.id}>{id}</td>
         <td>{author}</td>
         <td>{track}</td>
         <td>{album}</td>
         <td>{dataRelease}</td>
         <BrowserRouter>
            <Routes>
               <Route
                  path="/monsegard3.github.io/"
                  element={
                     <>
                        <td>
                           <PreView track={track} />
                        </td>
                        <td>
                           <PreEdit
                              author={author}
                              track={track}
                              setEdit={setEdit}
                           />
                        </td>
                     </>
                  }
               />
               <Route
                  path="/monsegard3.github.io/"
                  element={
                     <>
                        <td>
                           <PreView track={track} />
                        </td>
                        <td>
                           <PreEdit
                              author={author}
                              track={track}
                              setEdit={setEdit}
                           />
                        </td>
                     </>
                  }
               >
                  <Route
                     path="View/:lang"
                     element={
                        <View
                           id={id}
                           author={author}
                           track={track}
                           album={album}
                           dataRelease={dataRelease}
                        />
                     }
                  ></Route>
                  <Route
                     path="Edit/:lang"
                     element={
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
                           edit={edit}
                           setEdit={setEdit}
                        />
                     }
                  ></Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </tr>
   );
};
export default PatternTr;
