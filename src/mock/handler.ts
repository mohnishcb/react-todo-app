import { http, HttpResponse } from "msw";
import { Todo } from "../types/todo";

let todos: Todo[] = [];

export const handlers = [
  http.get("/todos", () => {
    console.log('Captured a "GET /todos" request');
    return HttpResponse.json({ data: [...todos] }, { status: 200 });
  }),

  http.post("/todos/add", async ({ request }) => {
    const { title } = (await request.json()) as { title: string };
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    todos.push(newTodo);
    return HttpResponse.json({ data: { ...newTodo } }, { status: 200 });
  }),

  http.delete("/todos/:id", ({ params }) => {
    const { id } = params as { id: string };
    console.log(`Captured a "DELETE /posts/${params.id}" request`);
    todos = todos.filter((todo) => todo.id !== id);
    return HttpResponse.json({ data: [...todos] }, { status: 200 });
  }),
];
