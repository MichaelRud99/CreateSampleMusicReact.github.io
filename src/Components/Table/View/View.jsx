import React, { useState } from "react";
import main from "../../Main/main.module.css";
import viewCss from "./view.module.css";
import { Link } from "react-router-dom";

const View = ({ id, author, dataRelease, track, album }) => {
   const [view, setView] = useState(true);

   return (
      <>
         {view === true && (
            <section className={viewCss.windov}>
               <div className={viewCss.flex}>
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
