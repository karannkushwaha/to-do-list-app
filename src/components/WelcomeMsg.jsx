import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    <>
      {todoItems.length === 0 && (
        <center>
          <h3>Welcome, Enjoy your day...! </h3>
        </center>
      )}
    </>
  );
};
export default WelcomeMsg;
