import React from "react";
import editCss from "./edit.module.css";
import patternForm from "../../PatternForm/patternForm.module.css";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editTrue } from "../../../utils/redux/slices/editSlice";

const PreEdit = ({ track }) => {
   const dispatch = useDispatch();

   return (
      <>
         <Link
            onClick={() => dispatch(editTrue())}
            className={patternForm.btn + " " + editCss.edit}
            to={`/monsegard3.github.io/Edit/${track}`}
         ></Link>
         <Outlet />
      </>
   );
};

export default PreEdit;
