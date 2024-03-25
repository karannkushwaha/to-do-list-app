import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteItem }) => {
  return (
    <>
      {todoItems.map((items) => (
        <TodoItem
          todoName={items.name}
          todoDate={items.dueDate}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </>
  );
};
export default TodoItems;
