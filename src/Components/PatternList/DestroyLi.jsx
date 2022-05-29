import React from "react";
import { readTodoList } from "../../utils";

const DestroyLi = ({ todoList, index, updateTodoList }) => {

   const destroyLi = (event) => {
      todoList.splice(index, 1);
      localStorage.setItem("todo", JSON.stringify(todoList));
      updateTodoList(() => readTodoList());
   };

   return (
      <input
         type="checkbox"
         onClick={destroyLi}
         className="list__destroy"
      ></input>
   );
};
export { DestroyLi };
