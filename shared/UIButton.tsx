"use client";

import { motion } from "framer-motion";

import { ComponentProps } from "react";
import { whileHover, whileTap } from ".";

type Props = ComponentProps<typeof motion.button> & { label: string };

export function UIButton(p: Props) {
  return (
    <motion.button
      {...p}
      {...{ whileHover, whileTap }}
      className="border border-slate-300 select-none text-slate-300 px-3 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
    >
      {p.label}
    </motion.button>
  );
}
