import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((items) => (
        <TodoItem
          key={items.name}
          todoName={items.name}
          todoDate={items.dueDate}
        />
      ))}
    </>
  );
};
export default TodoItems;
