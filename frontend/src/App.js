import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./components/Route";
// components
import Login from "./user/Login";
import Register from "./user/Register";
import Navbar from "./components/Navbar";
import Home from "./components/todo/Home";
import Footer from "./components/Footer";
import viewUsers from "./admin/ViewUsers";

export default function App() {
  return (
    <div>
      {/* <AddTodoModal todos={todos} setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos}/> */}
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/home" component={Navbar} /> */}
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/viewuser" component={viewUsers} />
          <PublicRoute exact path="/register" component={Register} />
          <PublicRoute exact path="/login" component={Login} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
