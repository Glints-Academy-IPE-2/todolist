import React, { useState } from 'react';
// import css
import './App.css';
// components
import Navbar from './components/Navbar';
import AddTodoModal from './components/AddTodoModal';
import Todos from './components/Todos';

export default function App() {
  // changing body background color
  document.body.style = 'background: #20212C;';

  const [todos, setTodos] = useState([]);

  return (
    <>
      <Navbar />
      <AddTodoModal todos={todos} setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos}/>
    </>
  );
}