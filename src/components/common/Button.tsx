"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = Omit<HTMLMotionProps<"button">, "ref"> & {
  variant?: ButtonVariant;
  color?: string;
};

const BASE =
  "inline-flex cursor-pointer items-center justify-center rounded-full border px-8 py-3 font-body text-sm font-medium tracking-[0.15em]";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      color = "var(--storia-orange)",
      className = "",
      style,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const isPrimary = variant === "primary";

    const variantStyle: React.CSSProperties = isPrimary
      ? {
          backgroundColor: color,
          borderColor: color,
          color: "#fff",
        }
      : {
          backgroundColor: "transparent",
          borderColor: color,
          color,
        };

    return (
      <motion.button
        ref={ref}
        type={type}
        className={`${BASE} ${className}`.trim()}
        style={{ ...variantStyle, ...style }}
        whileHover={
          isPrimary
            ? { scale: 1.03, opacity: 0.92 }
            : { backgroundColor: color, color: "#fff", borderColor: color }
        }
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
