import { UILink } from "@/shared";
import { prisma } from "./db";
import TodoItem from "./ui/TodoItem";
import { revalidatePath } from "next/cache";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({
    where: {
      id: parseInt(id),
    },
    data: {
      complete,
    },
  });

  revalidatePath("/");
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <UILink href="/new">New</UILink>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...{ ...todo, id: todo.id.toString(), toggleTodo }}
          />
        ))}
      </ul>
    </>
  );
}
