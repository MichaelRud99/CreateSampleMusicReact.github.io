import React from "react";
import deleteAll from "./deleteAll.module.css";
import main from "../../Main/main.module.css";
import indexCss from "../../index.module.css";
import { useActions } from "../../Hooks/useActotion";
import { sagaSlice } from "../../../utils/redux/slices/sagaSlice";

const DeleteAll = ({ setStorage }) => {
   const slice = useActions(sagaSlice.actions);
   const delet = () => {
      setStorage("");
      slice.sagaClear();
   };
   return (
      <input
         onClick={delet}
         type="button"
         className={
            main.btn + " " + deleteAll.delete + " " + indexCss.transitionBtn
         }
         defaultValue="удалить всё"
      ></input>
   );
};

export default DeleteAll;
