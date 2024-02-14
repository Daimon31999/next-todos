"use client";

import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function UIInput(p: InputProps) {
  return (
    <input
      {...p}
      className="border border-slate-500 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
    />
  );
}
