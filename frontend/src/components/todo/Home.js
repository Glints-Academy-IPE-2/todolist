import React, { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import Todos from "./Todos";
import "./styles.css";

const Home = () => {
  const [todos, setTodos] = useState([
    {
      id: Math.round(Math.random() * 1000),
      taskName: "Makan",
      description: "Makan-makan",
      isCompleted: false,
    },
    {
      id: Math.round(Math.random() * 1000),
      taskName: "Bersih",
      description: "Bersih-Bersih",
      isCompleted: false,
    },
  ]);

  return (
    <div style={{backgroundColor: "#20212C"}}>
      <AddTodoModal todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
