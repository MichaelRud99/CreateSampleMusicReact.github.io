import React from "react";
import viewCss from "./view.module.css";
import indexCss from "../../index.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "../../Hooks/useActotion";
import { interfaceActionSlice } from "../../../utils/redux/slices/interfaceActionSlice";

const PreView = ({ id }) => {
   const open = useSelector((state) => state.interfaceActions.open);
   const slice = useActions(interfaceActionSlice.actions);

   return (
      <>
         {open === true ? (
            <Link
               className={
                  viewCss.btn +
                  " " +
                  viewCss.fastView +
                  " " +
                  indexCss.transitionColor
               }
               to={`/monsegard3.github.io/View/${id}`}
               onClick={() => slice.openFalse()}
            ></Link>
         ) : (
            <span className={viewCss.btn + " " + viewCss.fakeFastView}></span>
         )}
      </>
   );
};

export default PreView;
