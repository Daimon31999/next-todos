"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "../db";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  title: z.coerce.string().min(1),
});

export async function createTodo(prevState: State, data: FormData) {
  const validatedFields = FormSchema.safeParse({
    title: data.get("title"),
  });
  console.log({ validatedFields });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid title",
    };
  }

  const { title } = validatedFields.data;

  try {
    await prisma.todo.create({
      data: {
        title,
        complete: false,
      },
    });
  } catch (e) {
    return {
      message: "Database Error: Failed to Create Todo",
    };
  }

  revalidatePath("/");
  redirect("/");
}
