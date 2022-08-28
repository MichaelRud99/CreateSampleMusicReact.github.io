import React from "react";
import reset from "./reset.module.css";
import main from "../../Main/main.module.css";
import indexCss from "../../index.module.css";
import history from "../../../utils/history/history";
import { CSSTransition } from "react-transition-group";
import "../../transitionComponents.css";

const Reset = ({ setCheckSearch, setSearchValue, inProp }) => {
   const rst = () => {
      history.push(`/monsegard3.github.io/`);
      setSearchValue("");
      setCheckSearch("all");
   };

   return (
      <CSSTransition
         in={inProp}
         timeout={200}
         classNames="my-node"
         mountOnEnter
         unmountOnExit
      >
         <input
            onClick={rst}
            type="button"
            className={
               main.btn + " " + reset.btn + " " + indexCss.transitionBtn
            }
            defaultValue="Сбросить"
         ></input>
      </CSSTransition>
   );
};

export default Reset;
