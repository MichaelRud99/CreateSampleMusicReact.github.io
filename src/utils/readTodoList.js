const readTodoList = () => {
   let todoList = [];
   if (JSON.parse(localStorage.getItem("todo")) != undefined) {
      todoList = JSON.parse(localStorage.getItem("todo"));
   }
   return todoList;
};
export { readTodoList };
