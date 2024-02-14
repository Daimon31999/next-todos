"use client";

import { LinkProps } from "next/link";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { whileHover, whileTap } from ".";
import { useRouter } from "next/navigation";

type Props = { href: string } & PropsWithChildren<{}>;

export function UILink(p: Props) {
  const router = useRouter();

  return (
    <motion.div
      onClick={() => {
        router.push(p.href);
      }}
      className="border cursor-pointer border-slate-300 select-none text-slate-300 px-3 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      {...{ whileHover, whileTap }}
    >
      {p.children}
    </motion.div>
  );
}
