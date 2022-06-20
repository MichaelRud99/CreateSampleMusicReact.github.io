import React from "react";
import { useDispatch } from "react-redux";
import deleteAll from "./deleteAll.module.css";
import main from "../../Main/main.module.css";
import readStorage from "../../../utils/readStorage";

const DeleteAll = ({ setStorage }) => {
   const dispatch = useDispatch();

   const delet = () => {
      localStorage.removeItem("storage");
      setStorage(readStorage("storage"));
      dispatch({ type: "clear" });
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
