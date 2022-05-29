import "./css/ListMod.css";
import "./css/PatternList.css";
import React, { useState } from "react";
import { readTodoList } from "../../utils";
import { SelectItem, DestroyLi } from "./index";

const PatternList = ({ todoList, index, out, all, active, updateTodoList }) => {
   let [input, setInput] = useState(out);

   const todoListEdit = () => {
      todoList[index].edit = true;
      localStorage.setItem("todo", JSON.stringify(todoList));
      updateTodoList(() => readTodoList());
   };

   const edit = (event) => {
      setInput(event.target.value);
   };

   const editSubmit = (event) => {
      event.preventDefault();
      todoList[index].todo = input;
      todoList[index].edit = false;
      localStorage.setItem("todo", JSON.stringify(todoList));
      updateTodoList(readTodoList());
   };

   const blur = (event) => {
      editSubmit(event);
   };

   const keyUp = (event) => {
      if (event.code === "Enter" || event.code === "Escape") {
         editSubmit(event);
      }
   };

   return (
      <li className="list__li">
         {todoList[index].edit === false ? (
            <div className="flex">
               <SelectItem
                  todoList={todoList}
                  index={index}
                  updateTodoList={updateTodoList}
               />

               {all === true && todoList[index].check === true && (
                  <>
                     <span className="list__li_btn list__span_mod transition-position"></span>
                     <label
                        onDoubleClick={todoListEdit}
                        className="list__label list__label_mod transition-color"
                     >
                        {out}
                     </label>
                  </>
               )}
               {all === true && todoList[index].check === false && (
                  <>
                     <span className="list__li_btn transition-position"></span>
                     <label
                        onDoubleClick={todoListEdit}
                        className="list__label transition-color"
                     >
                        {out}
                     </label>
                  </>
               )}

               {active === true && (
                  <>
                     <span className="list__li_btn transition-position"></span>
                     <label
                        onDoubleClick={todoListEdit}
                        className="list__label transition-color"
                     >
                        {out}
                     </label>
                  </>
               )}

               {all === false && active === false && (
                  <>
                     <span className="list__li_btn list__span_mod transition-position"></span>
                     <label
                        onDoubleClick={todoListEdit}
                        className="list__label list__label_mod transition-color"
                     >
                        {out}
                     </label>
                  </>
               )}

               <div className="list__div_destroy transition-position">x</div>
               <DestroyLi
                  todoList={todoList}
                  index={index}
                  updateTodoList={updateTodoList}
               />
            </div>
         ) : (
            <input
               type="text"
               autoFocus
               className="edit"
               value={input}
               onChange={edit}
               onKeyDownCapture={keyUp}
               onBlurCapture={blur}
            />
         )}
      </li>
   );
};

export { PatternList };
