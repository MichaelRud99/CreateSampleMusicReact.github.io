import React from "react";
import reset from "./reset.module.css";
import main from "../../Main/main.module.css";

const Reset = ({ storage, setCheckSearch }) => {
   const rst = () => {
      storage.forEach((element) => {
         element.search = false;
      });

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
