"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";
import { Eye, EyeOff } from "lucide-react";
import type * as React from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full min-w-0 rounded-lg border border-input bg-transparent text-base outline-none transition-colors file:inline-flex file:h-6 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:disabled:bg-input/80",
  {
    variants: {
      size: {
        sm: "h-7 px-2 py-0.5 text-sm",
        default: "h-8 px-2.5 py-1",
        lg: "h-12 px-3.5 py-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const sizeConfig = {
  sm: { iconLeft: "left-2", iconPl: "pl-7", toggleRight: "right-2" },
  default: { iconLeft: "left-2.5", iconPl: "pl-8", toggleRight: "right-2.5" },
  lg: { iconLeft: "left-3.5", iconPl: "pl-10", toggleRight: "right-3.5" },
} as const;

type InputProps = Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants> & {
    icon?: React.ReactNode;
  };

function Input({ className, type, size = "default", icon, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const resolvedType = isPassword && showPassword ? "text" : type;
  const { iconLeft, iconPl, toggleRight } = sizeConfig[size ?? "default"];

  return (
    <div className="relative w-full">
      {icon && (
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 -translate-y-1/2 [&>svg]:size-4 [&>svg]:text-muted-foreground",
            iconLeft,
          )}
        >
          {icon}
        </span>
      )}
      <InputPrimitive
        type={resolvedType}
        data-slot="input"
        className={cn(inputVariants({ size }), icon && iconPl, isPassword && "pr-8", className)}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
            toggleRight,
          )}
        >
          {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      )}
    </div>
  );
}

export { Input };
