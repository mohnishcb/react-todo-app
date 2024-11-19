import React from "react";

interface TodoItemProps {
  id: string;
  title: string;
  handleDeleteTodo: (id: string) => Promise<void>;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, handleDeleteTodo }) => {
  return (
    <>
      <li key={id} className="todo-item">
        <span className="todo-text">{title}</span>
        <button className="delete-btn" onClick={() => handleDeleteTodo(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
