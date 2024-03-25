import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function AddTodo({ onNewItem }) {
  const [todoName, setTotoName] = useState("");
  const [todoDueDate, setTotoDueDate] = useState("");
  const handleNameChange = (event) => {
    setTotoName(event.target.value);
    // console.log(event.target.value);
  };
  const handleDateChange = (event) => {
    setTotoDueDate(event.target.value);
    // console.log(event.target.value);
  };
  const handleAddItem = () => {
    onNewItem(todoName, todoDueDate);
    setTotoDueDate("");
    setTotoName("");
  };
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
                <Form.Control
                  type="email"
                  placeholder="Enter Todo here"
                  onChange={handleNameChange}
                  value={todoName}
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="date"
                  onChange={handleDateChange}
                  value={todoDueDate}
                />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Button
                variant="success"
                className="button-class"
                onClick={handleAddItem}
              >
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default AddTodo;
