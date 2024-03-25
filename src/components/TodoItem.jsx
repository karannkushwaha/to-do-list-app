import { Button, Col, Container, Row } from "react-bootstrap";
// const TodoItem = ({ todoName, todoDate }) => {
function TodoItem({ todoName, todoDate, onDeleteItem }) {
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
              onClick={() => onDeleteItem(todoName)}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default TodoItem;
