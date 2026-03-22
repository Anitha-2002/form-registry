import React, { forwardRef } from "react";
import clsx from "clsx";

type Padding = "none" | "sm" | "md" | "lg";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type CardProps = BaseProps & {
  padding?: Padding;
  hoverable?: boolean;
  as?: React.ElementType;
};

const paddingStyles: Record<Padding, string> = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

/* =========================
   ROOT CARD
========================= */

const Card = forwardRef<HTMLElement, CardProps>(
  (
    {
      children,
      className,
      padding = "md",
      hoverable = false,
      as: Component = "div",
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={clsx(
          "bg-white border rounded-lg shadow-sm",
          paddingStyles[padding],
          hoverable && "hover:shadow-md transition",
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Card.displayName = "Card";

/* =========================
   SUB COMPONENTS
========================= */

export const CardHeader = forwardRef<HTMLDivElement, BaseProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("mb-2 font-semibold text-lg text-ink-primary", className)}
      >
        {children}
      </div>
    );
  },
);

CardHeader.displayName = "CardHeader";

export const CardContent = forwardRef<HTMLDivElement, BaseProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={clsx("text-sm text-ink-secondary", className)}>
        {children}
      </div>
    );
  },
);

CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, BaseProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={clsx("mt-4 flex justify-end", className)}>
        {children}
      </div>
    );
  },
);

CardFooter.displayName = "CardFooter";

export default Card;
