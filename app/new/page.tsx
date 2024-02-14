"use client";

import { UIButton, UIInput, UILink } from "@/shared";
import { useFormState } from "react-dom";
import { createTodo } from "../lib/actions";

export default function NewPage() {
  const initialState = { message: "", errors: {} };

  const [state, dispatch] = useFormState(createTodo, initialState);

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>

      <form className="flex gap-2 flex-col" action={dispatch}>
        <UIInput type="text" name="title" />
        {state.errors?.title &&
          state.errors.title.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}

        <div className="flex gap-2 justify-end ">
          <UILink href="..">Cancel</UILink>
          <UIButton type="submit" label="Create" />
        </div>
      </form>
    </>
  );
}
