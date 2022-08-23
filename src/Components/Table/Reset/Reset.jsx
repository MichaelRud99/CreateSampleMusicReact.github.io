import React from "react";
import reset from "./reset.module.css";
import main from "../../Main/main.module.css";
import history from "../../../utils/history/history";

const Reset = ({ setCheckSearch, setSearchValue }) => {
   const rst = () => {
      history.push(`/monsegard3.github.io/`);
      setSearchValue("");
      setCheckSearch("all");
   };

   return (
      <input
         onClick={rst}
         type="button"
         className={main.btn + " " + reset.btn}
         defaultValue="Сбросить"
      ></input>
   );
};

export default Reset;
