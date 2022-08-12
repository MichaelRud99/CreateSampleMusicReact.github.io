import React, { useState } from "react";
import main from "../../Main/main.module.css";
import viewCss from "./view.module.css";
import { Link } from "react-router-dom";

const View = ({ id, author, dataRelease, track, album, albumPhoto }) => {
   const [view, setView] = useState(true);

   return (
      <>
         {view === true && (
            <section className={viewCss.window}>
               <div className={viewCss.flex}>
                  <img
                     id="img"
                     className={viewCss.img}
                     src={
                        albumPhoto.length < 10
                           ? "https://lastfm.freetls.fastly.net/i/u/ar0/6e303c647ed69c7dd3f1f4352f019b6f.jpg"
                           : albumPhoto
                     }
                     alt="album"
                  />

                  <span className={viewCss.leftList}>
                     <div>
                        <label>id</label>
                     </div>
                     <div>
                        <label>Исполнитель</label>
                     </div>
                     <div>
                        <label>название композиции</label>
                     </div>
                     <div>
                        <label>Альбом</label>
                     </div>
                     <div>
                        <label>Дата выпуска</label>
                     </div>
                  </span>

                  <span className={viewCss.rightList}>
                     <div>
                        <label>{id}</label>
                     </div>
                     <div>
                        <label>{author}</label>
                     </div>
                     <div>
                        <label>{track}</label>
                     </div>
                     <div>
                        <label>{album}</label>
                     </div>
                     <div>
                        <label>{dataRelease}</label>
                     </div>
                  </span>
               </div>
               <div>
                  <Link
                     onClick={() => setView(false)}
                     className={main.btn + " " + viewCss.close}
                     to="/monsegard3.github.io/"
                  >
                     Закрыть
                  </Link>
               </div>
            </section>
         )}
      </>
   );
};
export default View;
