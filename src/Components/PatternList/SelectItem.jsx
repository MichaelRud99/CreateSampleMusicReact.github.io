import React from "react";
import { readTodoList } from "../../utils";

const SelectItem = ({ index, todoList, updateTodoList }) => {
   const selectItem = () => {
      todoList[index].check = !todoList[index].check;
      localStorage.setItem("todo", JSON.stringify(todoList));
      updateTodoList(() => readTodoList());

   };

   return (
      <input
         onClick={selectItem}
         type="checkbox"
         className="list__li_checkbox"
      />
   );
};

export { SelectItem };
