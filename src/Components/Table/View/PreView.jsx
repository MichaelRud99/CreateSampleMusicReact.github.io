import React from "react";
import viewCss from "./view.module.css";
import { Link } from "react-router-dom";

const PreView = ({ id }) => {
   return (
      <>
         <Link
            className={viewCss.btn + " " + viewCss.fastView}
            to={`/monsegard3.github.io/View/${id}`}
         ></Link>
      </>
   );
};

export default PreView;
