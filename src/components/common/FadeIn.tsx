"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export type FadeInDirection = "up" | "down" | "left" | "right" | "none";

type FadeInProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "whileInView" | "viewport" | "transition"
> & {
  direction?: FadeInDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  viewportMargin?: string;
  /** inView: animate when scrolled into view; mount: animate on render */
  trigger?: "inView" | "mount";
};

function getOffset(direction: FadeInDirection, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: -distance };
    case "right":
      return { x: distance };
    default:
      return {};
  }
}

export default function FadeIn({
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 20,
  viewportMargin,
  trigger = "inView",
  className,
  children,
  ...props
}: FadeInProps) {
  const initial = { opacity: 0, ...getOffset(direction, distance) };
  const animate = { opacity: 1, x: 0, y: 0 };
  const transition = { duration, delay };

  if (trigger === "mount") {
    return (
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: viewportMargin }}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
