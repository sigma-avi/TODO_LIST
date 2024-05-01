import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import AddtodoForm from "./addTodoForm";
import Todo from "./Todo"
import Navselect from "./navSelect";


const App = () => {
  const[ToDos,setTodos]=useState([])
  const[status,setStatus]=useState(false)

  useEffect(()=>{
    const todos=JSON.parse(window.localStorage.getItem('todos')
    )
    todos?setTodos(prevState=>[...prevState,...todos]):
      window.localStorage.setItem('todos',[])
  },[])

  useEffect(()=>{
    window.localStorage.setItem('todos',JSON.stringify(ToDos));
  },[ToDos])

const filterTodo= ToDos.filter(item=>item.isDone===status);


  const cDate=new Date();
  const date=cDate.getFullYear()+'-'+(cDate.getMonth()+1)+'-'+cDate.getDate();
  
  return (
    <>
      <Header />
      <main>
        <section className="py-5 mb-5">
          <div className="container d-flex flex-column align-items-center">
            <p className="display-6 fw-light">Welcome</p>
            <p className="text-dark text-opacity-50">
              To get started , add some item to your list:
            </p>
            <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-4">
              <AddtodoForm todos={ToDos} addToList={setTodos} />
            </div>
            <div className="text-black text-opacity-50">Today is {date}</div>
          </div>
        </section>
        <section>
          <div className="container">.
            <div className="d-flex flex-column align-items-center row">
              <Navselect todos={ToDos} status={status} setStatus={setStatus}/>
              <div className="col-sm-10 col-md-8 col-xl">
               {(filterTodo.length>0)? 
              filterTodo.map(item=>(item.isDone===status) && < Todo key={item.id} todoState={item} setTodoState={setTodos} todoList={ToDos}/>
                  ):<p className="mt-5 text-center fs-4 text-muted">the list of todos is empty</p> 
                 

                }
                  
               
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
