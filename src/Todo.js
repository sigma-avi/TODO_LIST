import React, { useState } from "react";
import EditTodo from "./EditTodo";

const Todo = (props) => {
  const [editStatus, setEditStatus] = useState(false);
  const { todoState, setTodoState, todoList } = props;
  const editTodo = () => {
    setEditStatus(!editStatus);
  };
  const addEditedTodo = (edittext) => {
    const EditedTodoitem = todoList.find((item) => item.id === todoState.id);
    console.log(EditedTodoitem);
    const updateTodoList = todoList.filter((item) => item.id !== todoState.id);
    console.log(updateTodoList);
    EditedTodoitem.text = edittext;
    setTodoState([...updateTodoList, EditedTodoitem]);
  };
  const checkTodo = () => {
    todoState.isDone = !todoState.isDone;
    const updateTodoList = todoList.filter((item) => item.id !== todoState.id);

    setTodoState([...updateTodoList, todoState]);
  };

  const deleteTodo = () => {
    const updateTodoList = todoList.filter((item) => item.id !== todoState.id);
    setTodoState([...updateTodoList]);
  };
  return (
    <>
      {editStatus ? (
        <EditTodo
          editTodo={editTodo}
          addEditedTodo={addEditedTodo}
          defaultText={todoState.text}
        />
      ) : (
        <div className="d-flex justify-content-between flex-column gap-4 align-align-items-center shadow-sm border-start border-2 rounded p-3 mt-3">
          <div>
            <p className="fw-lighter ">
              <small className="fs-5 text-black text-opacity-25">
                {todoState.date}
              </small>
            </p>
            {!todoState.isDone ? (
              <button
                onClick={checkTodo}
                className="btn btn-sm btn-outline-sucess me-3"
                type="checkbox"
                id={todoState.text}
              >
                Do
              </button>
            ) : (
              <button
                onClick={checkTodo}
                className="btn btn-sm btn-outline-warning me-3"
                type="checkbox"
                id={todoState.text}
              >
                Undo
              </button>
            )}
            <label className="form-check-label" htmlFor={todoState.text}>
              {todoState.text}
            </label>
          </div>
          <div>
            {!todoState.isDone ? (
              <button
                onClick={editTodo}
                type="button"
                className="btn btn-success btn-sm"
              >
                edit
              </button>
            ) : null}
            <button
              onClick={deleteTodo}
              type="button"
              className="btn btn-danger btn-sm ms-1"
            >
              delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
