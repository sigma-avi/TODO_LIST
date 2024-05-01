import React, { useEffect, useRef, useState } from "react";

const AddTodoForm = (props) => {
  const [inputText, setInputText] = useState("");
  const input=useRef(null);
  useEffect(()=>input.current.focus(),[])
  const inputHandler=(e)=>{
    setInputText(e.target.value);
  }
  const{addToList}=props;
  const submitHandler=(event)=>{
    event.preventDefault();
    if(inputText){
        const today= new Date()
    const date=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    const todo={id:Date.now(),text:inputText,isDone:false,date:date}
    addToList(prevState=>[...prevState,todo])
    setInputText('')
    }
  }
  return (
    <>
      <form onSubmit={submitHandler} className="input-group my-3">
        <input
          ref={input}
          name="todoinput"
          autoComplete="off"
          value={inputText}
          onChange={inputHandler}
          type="text"
          className="p-2 form-constrol"
          placeholder="you want to do ... What?"
          aria-label="Recipient username"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-cutline-success"type="submit"id="button-addon2">AddTodo</button>
      </form>

    </>
  );
};

export default AddTodoForm;
