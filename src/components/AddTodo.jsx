import { Button, Col, Container, Form, Row } from "react-bootstrap";

function AddTodo() {
  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col sm={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="Enter Todo here" />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Button variant="success">Add</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default AddTodo;
