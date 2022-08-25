import React from "react";
import { Link } from "react-router-dom";
import main from "../../Main/main.module.css";
import deleteItem from "./deleteItem.module.css";
import { useActions } from "../../Hooks/useActotion";
import { sagaSlice } from "../../../utils/redux/slices/sagaSlice";
import { editSlice } from "../../../utils/redux/slices/editSlice";
import { openOutletSlise } from "../../../utils/redux/slices/openOutletSlise";

const DeleteItem = ({ storage, setStorage, index }) => {
   const slice = useActions([
      sagaSlice.actions,
      editSlice.actions,
      openOutletSlise.actions,
   ]);

   const delet = () => {
      const cloneStorage = structuredClone(storage);
      slice[0].sagaDeleteItem(storage[index]);
      slice[0].sagaReadData();
      cloneStorage.splice(index, 1);
      setStorage(cloneStorage);
      slice[1].editFalse();
      slice[2].openTrue();
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
