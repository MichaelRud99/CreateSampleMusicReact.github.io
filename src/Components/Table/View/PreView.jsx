import React from "react";
import viewCss from "../View/view.module.css";
import { Link} from "react-router-dom";

const PreView = ({ track }) => {
   return (
      <>
         <Link
            className={viewCss.btn + " " + viewCss.fastView}
            to={`/monsegard3.github.io/View/${track}`}
         ></Link>
      </>
   );
};

export default PreView;
