import React from "react";
import editCss from "./edit.module.css";
import patternForm from "../../PatternForm/patternForm.module.css";
import { Link, Outlet } from "react-router-dom";

const PreEdit = ({ track, setEdit }) => {
   return (
      <>
         <Link
            onClick={() => setEdit(false)}
            className={patternForm.btn + " " + editCss.edit}
            to={`/Edit/${track}`}
         ></Link>
         <Outlet />
      </>
   );
};

export default PreEdit;
