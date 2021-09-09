import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Navbar from './components/Navbar';
import Home from './components/todo/Home';


export default function App() {

  

  return (
    <div>
      {/* <AddTodoModal todos={todos} setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos}/> */}
      <Navbar />

      {/* <Navbar /> */}
      <Router>
      <div className="App">
        <div className="content">
          <Switch>
            {/* <Route exact path="/home" component={Navbar} /> */}
            <Route exact path="/home" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </div>
      </div>
    </Router>
    </div>
  );
}



