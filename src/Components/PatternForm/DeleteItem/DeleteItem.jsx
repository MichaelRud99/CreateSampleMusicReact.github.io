import React from "react";
import { Link } from "react-router-dom";
import main from "../../Main/main.module.css";
import deleteItem from "./deleteItem.module.css";
import { useActions } from "../../Hooks/useActotion";
import { sagaSlice } from "../../../utils/redux/slices/sagaSlice";
import { editSlice } from "../../../utils/redux/slices/editSlice";

const DeleteItem = ({ storage, index, setStorage }) => {
   const slice = useActions([sagaSlice.actions, editSlice.actions]);

   const delet = () => {
      slice[0].sagaDeleteItem(storage[index]);
      storage.splice(index, 1);
      slice[1].editFalse();
      localStorage.setItem(storage);
      setStorage(storage);
   };

   return (
      <Link
         onClick={delet}
         className={main.btn + " " + deleteItem.delete}
         to="/monsegard3.github.io/"
      >
         Удалить
      </Link>
   );
};

export default DeleteItem;
