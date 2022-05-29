import React, { useState, useEffect } from "react";
import "./TodoApp.css";
import { readTodoList } from "../../utils";
import { OutPatternList } from "../PatternList";
import { InputFields } from "./index";
import { BtnClearCompleted, BtnFooter, BtnSelectAll } from "../Btn";

const TodoApp = () => {
   const [todoList, setTodoList] = useState(() => {
      return readTodoList();
   });
   const [all, setAll] = useState(true);
   const [active, setActive] = useState(false);

   return (
      <div>
         <div className="todoapp">
            <div className="flex todoapp__frame">
               {todoList.length > 0 && (
                  <BtnSelectAll
                     todoList={todoList}
                     updateTodoList={setTodoList}
                  />
               )}

               <InputFields todoList={todoList} updateTodoList={setTodoList} />
            </div>

            <OutPatternList
               todoList={todoList}
               updateTodoList={setTodoList}
               all={all}
               active={active}
            />
            {todoList.length > 0 && (
               <footer className="flex todoapp__footer">
                  <strong className="strong" value="0" data-counter>
                     {
                        todoList.filter((todoList) => todoList.check === false)
                           .length
                     }
                     item left
                  </strong>
                  <BtnFooter
                     all={all}
                     updateAll={setAll}
                     active={active}
                     updateActive={setActive}
                  />

                  {todoList.filter((todoList) => todoList.check === true)
                     .length > 0 && (
                     <BtnClearCompleted
                        todoList={todoList}
                        updateTodoList={setTodoList}
                     />
                  )}
               </footer>
            )}
         </div>
      </div>
   );
};
export { TodoApp };
