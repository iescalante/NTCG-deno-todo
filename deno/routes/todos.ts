import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

interface Todo {
  id: string;
  text: string;
}

let todos: Todo[] = [];

router.get("/todos", (ctx) => {
  ctx.response.body = { todos };
});

router.post("/todos", async (ctx) => {
  const data = await ctx.request.body();
  if (!ctx.request.hasBody) {
    ctx.response.status = 400;
    ctx.response.body = { message: "No data provided" };
    return;
  }
  const value = await data.value;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: value.text,
  };

  todos.push(newTodo);
  ctx.response.body = { message: "Created!", todo: newTodo };
});

router.put("/todos/:todoId", async (ctx) => {
  const data = await ctx.request.body();
  const value = await data.value;
  const todoId = ctx.params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  todos[todoIndex] = { id: todos[todoIndex].id, text: value.text };
  ctx.response.body = { message: "updated todo!" };
});

router.delete("/todos/:todoId", (ctx) => {
  const todoId = ctx.params.todoId;
  todos = todos.filter((todo) => todo.id !== todoId);
  ctx.response.body = { message: "deleted todo!" };
});

export default router;
