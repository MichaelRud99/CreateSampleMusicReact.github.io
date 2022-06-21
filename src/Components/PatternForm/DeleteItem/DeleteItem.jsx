import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editFalse } from "../../../utils/redux/editSlice";
import main from "../../Main/main.module.css";
import deleteItem from "./deleteItem.module.css";

const DeleteItem = ({ storage, index }) => {
   const dispatch = useDispatch();

   const delet = () => {
      storage.splice(index, 1);
      dispatch({ type: "deleteItem", index });
      dispatch(editFalse());
      dispatch({ type: "WRITE_DATA", payload: storage });
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
