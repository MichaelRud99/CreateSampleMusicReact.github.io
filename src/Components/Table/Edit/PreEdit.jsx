import React from "react";
import editCss from "./edit.module.css";
import patternForm from "../../PatternForm/patternForm.module.css";
import { Link, Outlet } from "react-router-dom";
import { openOutletSlise } from "../../../utils/redux/slices/openOutletSlise";
import { editSlice } from "../../../utils/redux/slices/editSlice";
import { useActions } from "../../Hooks/useActotion";
import { useSelector } from "react-redux";

const PreEdit = ({ id }) => {
   const slice = useActions([editSlice.actions, openOutletSlise.actions]);
   const state = useSelector((state) => state.openModalWindow.open);

   const tmp = () => {
      slice[0].editTrue();
      slice[1].openFalse();
   };

   return (
      <>
         {state === true ? (
            <>
               <Link
                  onClick={tmp}
                  className={patternForm.btn + " " + editCss.edit}
                  to={`/monsegard3.github.io/Edit/${id}`}
               ></Link>
            </>
         ) : (
            <span className={patternForm.btn + " " + editCss.fakeEdit}></span>
         )}
         <Outlet />
      </>
   );
};

export default PreEdit;
