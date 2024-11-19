import { useState } from "react";
import { Todo } from "../types/todo";
import { getTodoList, addTodo, deleteTodo } from "../services/todoApiService";

export const useTodoApi = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const handleTodoList = async () => {
    try {
      const listResponse = await getTodoList();
      let listData = await listResponse.json();
      listData = listData.data;
      setTodos(listData);
      console.log("🚀 ~ handleTodoList ~ listResponse:", listData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      const response = await deleteTodo({ id: id });
      let deletedTodo = await response.json();
      deletedTodo = deletedTodo.data;
      handleTodoList();
      console.log("🚀 ~ handleTodoList ~ response:", deletedTodo);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTodo = async () => {
    try {
      if (newTodo.trim()) {
        const response = await addTodo({ title: newTodo });
        let addedTodo = await response.json();
        addedTodo = addedTodo.data;
        setNewTodo("");
        handleTodoList();
        console.log("🚀 ~ handleTodoList ~ response:", addedTodo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return {
    handleTodoList,
    handleDeleteTodo,
    handleAddTodo,
    todos,
    setTodos,
    newTodo,
    setNewTodo,
    search,
    setSearch,
    filteredTodos,
  };
};
