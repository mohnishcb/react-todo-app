import React from "react";
import "./todo.modules.css";
import { useTodoApi } from "../../hooks/useTodoApi";
import TodoItem from "./TodoItem";

const TodoApp: React.FC = () => {
  const {
    handleDeleteTodo,
    handleAddTodo,
    newTodo,
    setNewTodo,
    search,
    setSearch,
    filteredTodos,
  } = useTodoApi();

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <br />
      <br />
      <div className="todo-search-container">
        <input
          type="text"
          className="search-field"
          placeholder="Search todos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Input Field and Submit Button */}
      <div className="todo-input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Enter a todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="submit-btn" onClick={handleAddTodo}>
          Submit
        </button>
      </div>

      {/* Todo List */}
      <div className="todo-list-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
