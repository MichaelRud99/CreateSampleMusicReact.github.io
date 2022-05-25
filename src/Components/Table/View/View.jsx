import React, { useState } from "react";
import main from "../../Main/main.module.css";
import viewCss from "./view.module.css";

const View = ({ id, author, dataRelease, track, album }) => {
   const [view, setView] = useState(false);

   return (
      <>
         <button
            onClick={() => setView(true)}
            className={viewCss.btn + " " + viewCss.fastView}
         ></button>
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
               <input
                  onClick={() => setView(false)}
                  className={main.btn + " " + viewCss.close}
                  defaultValue="закрыть"
                  type="button"
               ></input>
            </section>
         )}
      </>
   );
};
export default View;
