import { Button, Col, Container, Row } from "react-bootstrap";

function TodoItem() {
  let todoName = "karan";
  let todoDate = "21/02/2025";
  return (
    <>
      <Container className="todo-item">
        <Row>
          <Col sm={6}>{todoName}</Col>
          <Col sm={4}>{todoDate}</Col>
          <Col sm={2}>
            <Button variant="danger" className="button-class">
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default TodoItem;
