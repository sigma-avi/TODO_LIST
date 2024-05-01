import React, { useState } from "react";

const EditTodo = (props) => {
  const { editTodo, addEditedTodo, defaultText } = props;
  const [edittext, setEditText] = useState(defaultText);
  const inputHandler=(e)=>{
    setEditText(e.target.value);

  }
  const submitHandler=(event)=>{
    event.preventDefault();

editTodo();
addEditedTodo(edittext);
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center shadow-sm border-start border-2 rounded p-3 mt-3">
        <form onSubmit={submitHandler} className="input-group my-3">
          <input
            name="todoinput"
            value={edittext}
            onChange={inputHandler}
            type="text"
            className="p-2 form-control"
            placeholder="i want to edit..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-out;ine-success" type="submit"id="button-addon2">Edit Todo</button>
        </form>
      </div>
    </>
  );
};

export default EditTodo;
