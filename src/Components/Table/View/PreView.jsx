import React from "react";
import viewCss from "./view.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "../../Hooks/useActotion";
import { openOutletSlise } from "../../../utils/redux/slices/openOutletSlise";

const PreView = ({ id }) => {
   const state = useSelector((state) => state.openModalWindow.open);
   const slice = useActions(openOutletSlise.actions);

   return (
      <>
         {state === true ? (
            <Link
               className={viewCss.btn + " " + viewCss.fastView}
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
