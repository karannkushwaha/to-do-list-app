import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import AppName from "./components/AppName";
import "./App.css";
import AppClock from "./components/AppClock";

function App() {
  return (
    <>
      <AppName />
      <AddTodo />
      <TodoItem />
      <AppClock />
    </>
  );
}

export default App;
