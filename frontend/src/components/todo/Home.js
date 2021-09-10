import React, { useState } from "react";
// import css
import "./styles.css";
// components
import AddTodoModal from "./AddTodoModal";
import Todos from "./Todos";

const Home = () => {
  // changing body background color
  // document.body.style = 'background: #20212C;';
  
  const [todos, setTodos] = useState([]);

  return (
    <div style={{ backgroundColor: "#20212C", flex: 1, height: "81vh" }}>
      <AddTodoModal todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
