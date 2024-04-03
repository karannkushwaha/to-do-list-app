import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import AppClock from "./components/AppClock";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <AppName />
        <AddTodo />
        {/* {todoItems.length === 0 && <WelcomeMsg />} */}
        <WelcomeMsg />
        <TodoItems />
        <AppClock />
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
