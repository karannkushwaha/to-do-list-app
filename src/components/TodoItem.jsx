import { Button, Col, Container, Row } from "react-bootstrap";

function TodoItem() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>sm=true</Col>
          <Col sm={4}>sm=true</Col>
          <Col sm={2}>
            <Button variant="danger">Delete</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default TodoItem;
