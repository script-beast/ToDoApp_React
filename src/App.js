import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";

function App() {
  let initTodos
  if (localStorage.getItem("todos") === null)
    initTodos = [];
  else
    initTodos = JSON.parse(localStorage.getItem("todos"))

  function onDelete(id) {
    setTodos(todos.filter(ele => id !== ele.sno));
  }

  function onAddTodo(newTodo) {
    if (todos.length === 0) newTodo.sno = 0
    else newTodo.sno = todos[todos.length - 1].sno + 1
    setTodos(prevTodo => {
      return [...prevTodo, newTodo];
    });
  }

  const [todos, setTodos] = React.useState(initTodos)
  useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)) }, [todos])

  const bodyStyle = {
    top: "100vh"
  }

  return (
    <div>
      <Router>
        <Header title="ToDo App" searchBar={false} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<div className="pb-4" style={bodyStyle}>
            <AddTodo onAdd={onAddTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;