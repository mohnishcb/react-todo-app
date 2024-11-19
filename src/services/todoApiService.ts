export const getTodoList = (): Promise<Response> => {
  return fetch(`/todos`, { method: "GET" });
};

export const addTodo = (data: { title: string }): Promise<Response> => {
  return fetch(`/todos/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteTodo = (params: { id: string }): Promise<Response> => {
  const { id } = params;
  return fetch(`/todos/${id}`, { method: "DELETE" });
};
