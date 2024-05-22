// App.js
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleEditTodo = (originalTodo, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo === originalTodo ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (todoToDelete) => {
    const updatedTodos = todos.filter((todo) => todo !== todoToDelete);
    setTodos(updatedTodos);
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  return (
    <div className="container" style={{ backgroundColor: "#f8f8d7" }}>
      <h1 className="text-center mt-5 mb-4" style={{ color: "#03aaa2" }}>
        My Todo
      </h1>
      <TodoForm onAddTodo={handleAddTodo} onFilterChange={handleFilterChange} />
      <TodoList
        todos={todos}
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo}
        filterStatus={filterStatus}
      />
    </div>
  );
};

export default App;
