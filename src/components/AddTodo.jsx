import { useContext, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  // const [todoName, setTotoName] = useState("");
  // const [todoDueDate, setTotoDueDate] = useState("");
  const todoNameElememt = useRef();
  const todoDueDateElememt = useRef();

  // const handleNameChange = (event) => {
  //   setTotoName(event.target.value);
  //   // console.log(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setTotoDueDate(event.target.value);

  //   // console.log(event.target.value);
  // };
  function handleAddItem(event) {
    event.preventDefault();
    // console.log(event);
    const todoName = todoNameElememt.current.value;
    const todoDueDate = todoDueDateElememt.current.value;
    addNewItem(todoName, todoDueDate);
    todoDueDateElememt.current.value = "";
    todoNameElememt.current.value = "";

    // setTotoDueDate("");
    // setTotoName("");
  }
  return (
    <>
      <Container>
        <Form onSubmit={handleAddItem}>
          <Row>
            <Col sm={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter Todo here"
                  // onChange={handleNameChange}
                  // value={todoName}
                  ref={todoNameElememt}
                  required
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
                  // onChange={handleDateChange}
                  // value={todoDueDate}
                  ref={todoDueDateElememt}
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Button
                variant="success"
                className="button-class"
                // onClick={handleAddItem}
                type="submit"
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
