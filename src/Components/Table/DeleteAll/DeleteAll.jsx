import React from "react";
import deleteAll from "./deleteAll.module.css";
import main from "../../Main/main.module.css";
import readStorage from "../../../utils/readStorage";

const DeleteAll = ({ setStorage }) => {
   const delet = () => {
      localStorage.removeItem("storage");
      setStorage(readStorage("storage"));
   };
   return (
      <input
         onClick={delet}
         type="button"
         className={main.btn + " " + deleteAll.delete}
         defaultValue="удалить всё"
      ></input>
   );
};

export default DeleteAll;
