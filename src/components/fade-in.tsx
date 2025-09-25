"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

export function FadeIn({ children, className, delay = 0, ...props }: PropsWithChildren<FadeInProps>) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
