import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
// const TodoItem = ({ todoName, todoDate }) => {
function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <>
      <Container className="todo-item">
        <Row>
          <Col sm={6}>{todoName}</Col>
          <Col sm={4}>{todoDate}</Col>
          <Col sm={2}>
            <Button
              variant="danger"
              className="button-class"
              onClick={() => deleteItem(todoName)}
            >
              <MdDelete />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default TodoItem;
