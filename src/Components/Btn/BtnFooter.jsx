import React, { useEffect } from "react";

const BtnFooter = ({ all, active, updateAll, updateActive }) => {
   const clickAll = () => {
      updateAll(true);
      updateActive(false);
   };
   const clickActive = () => {
      updateAll(false);
      updateActive(true);
   };
   const clickCompleted = () => {
      updateAll(false);
      updateActive(false);
   };

   return (
      <>
         {all === true && (
            <div className="footer__btn">
               <input
                  onClick={clickAll}
                  value="All"
                  type="button"
                  className="todoapp__btn todoapp__btn_mod transition-back-border"
               />
               <input
                  onClick={clickActive}
                  value="Active"
                  type="button"
                  className="todoapp__btn todoapp__btn_hover transition-back-border"
               />
               <input
                  onClick={clickCompleted}
                  value="Completed"
                  type="button"
                  className="todoapp__btn todoapp__btn_hover transition-back-border"
               />
            </div>
         )}

         {active === true && (
            <div className="footer__btn">
               <input
                  onClick={clickAll}
                  value="All"
                  type="button"
                  className="todoapp__btn todoapp__btn_hover transition-back-border"
               />
               <input
                  onClick={clickActive}
                  value="Active"
                  type="button"
                  className="todoapp__btn todoapp__btn_mod transition-back-border"
               />
               <input
                  onClick={clickCompleted}
                  value="Completed"
                  type="button"
                  className="todoapp__btn todoapp__btn_hover transition-back-border"
               />
            </div>
         )}

         {all === false && active === false && (
            <div className="footer__btn">
               <input
                  onClick={clickAll}
                  value="All"
                  type="button"
                  className="todoapp__btn todoapp__btn_hover transition-back-border"
               />
               <input
                  onClick={clickActive}
                  value="Active"
                  type="button"
                  className="todoapp__btn todoapp__btn_hover transition-back-border"
               />
               <input
                  onClick={clickCompleted}
                  value="Completed"
                  type="button"
                  className="todoapp__btn todoapp__btn_mod transition-back-border"
               />
            </div>
         )}
      </>
   );
};

export { BtnFooter };
