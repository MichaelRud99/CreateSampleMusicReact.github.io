import React from "react";
import { readTodoList } from "../../utils";

const BtnClearCompleted = ({ todoList, updateTodoList }) => {
   const clearCompleted = () => {
      const cloneTodoList = todoList;
      const searchCheckDone = todoList.filter(
         (todoList) => todoList.check === true
      ).length;

      if (searchCheckDone === todoList.length) {
         localStorage.removeItem("todo");
         updateTodoList(() => readTodoList());
         return null;
      }

      cloneTodoList.forEach((obj) => {
         let indexCheck = todoList.findIndex(
            (todoList) => todoList.check === true
         );
         if (indexCheck === -1) return;
         todoList.splice(indexCheck, 1);
      });

      localStorage.setItem("todo", JSON.stringify(todoList));
      updateTodoList(() => readTodoList());
   };

   return (
      <input
         onClick={clearCompleted}
         value="clear completed"
         type="button"
         className="todoapp__btn todoapp__btn_clear-completed"
      />
   );
};

export { BtnClearCompleted };
